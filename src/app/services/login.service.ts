import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {
  // 默认是未登录状态
  isLoggedIn = false;

  // 登录之后重定向到登录前的页面
  redirectUrl: string;

  login(): boolean {
    if (sessionStorage.getItem('token')) {
      // 如果本地存有 token （表示已登录），记录下登录状态，返回 true
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
