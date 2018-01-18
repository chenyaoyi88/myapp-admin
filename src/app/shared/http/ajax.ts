import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  ResponseContentType
} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
// import { LoginGuard } from '../../service';

@Injectable()
export class AjaxService {
  /** 请求 header */
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });
  /** 用户 token */
  private accessToken = '';
  /** 超时时间  */
  private timeout = 5000;

  /**
   * 封装Ajax请求构造函数
   * @param {Http} http - Angular2 HTTP
   * @param {LoginGuard} userAuth - 用户鉴权
   */

  constructor(
    private http: Http,
    // private userAuth: LoginGuard,
    private router: Router
  ) {
    // // 如果用户已登录，header带token请求
    // if (userAuth.checkLogin) {
      this.accessToken = sessionStorage.getItem('user_token');
      this.headers = new Headers({ 'Content-Type': 'application/json', 'token': this.accessToken });
    // }
  }

  /**
   * @description http GET 请求
   * @param {string} url - 请求的url链接
   * @param {*} params - 请求入参
   * @returns {Observable<any>} - 可观察对象
   *
   */
  get(url: string, params?: any): Observable<any> {
    const para: Array<any> = [];
    for (const index in params) {
      para.push(`${index}=${params[index]}`);
    }
    const options: RequestOptions = new RequestOptions({
      headers: this.headers,
      search: para.join('&')
    });
    return this.http
      .get(url, options)
      .timeout(this.timeout)
      .map(res => {
        const data: any = res.json();
        this.timeoutTest(data);
        return data;
      })
      .catch(this.handleError);
  }

  /**
   * @description http POST 请求
   * @param {string} url - 请求的url链接
   * @param {*} params - 请求入参
   * @returns {Observable<any>} - 可观察对象
   *
   */
  post(url: string, params?: any): Observable<any> {
    const options = new RequestOptions({ headers: this.headers });
    return this.http
      .post(url, JSON.stringify(params), options)
      .timeout(this.timeout)
      .map(res => {
        const data: any = res.json();
        this.timeoutTest(data);
        return data;
      })
      .catch(this.handleError);
  }

  /**
   * @description http GET 下载
   * @param {string} url - 请求的url链接
   * @param {*} params - 请求入参
   * @returns {Observable<any>} - 可观察对象
   */
  download(url: string, params: any): Observable<any> {
    const options = new RequestOptions({
      headers: this.headers,
      search: params,
      responseType: ResponseContentType.Blob
    });
    return this.http
      .get(url, options)
      .timeout(this.timeout)
      .map(res => res)
      .catch(this.handleError);
  }

  /**
   * @description http 处理错误
   * @param {Response} error - 错误信息
   * @returns {Observable<any>} - 可观察对象
   */
  handleError(error: Error): Observable<any> {
    console.warn(error.message || '请求失败');
    if (error.name === 'TimeoutError') {
      // 超时处理
      return Observable.throw('请求超时');
    }
    return Observable.throw(error || '服务器错误');
  }

  /**
   * @description 超时退出
   */
  timeoutTest(data: any) {
    if (data.code === '1001') {
      alert('登录超时，请重新登录');
      sessionStorage.removeItem('user_token');
      sessionStorage.removeItem('user_info');
      this.router.navigate(['login']);
      return;
    }
  }
}
