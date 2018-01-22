import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { LoginAuthService } from './login-auth.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(private loginAuth: LoginAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  // 检测登录状态
  checkLogin(url: string): boolean {
    if (url.includes('admin')) {
      // 访问主页面，如果是已登录的，可以正常访问
      if (sessionStorage.getItem('token')) {
        return true;
      }
      // 如果是未登录的

      // 保存重定向的URL
      this.loginAuth.redirectUrl = url;

      // 跳转到登录页面，
      this.router.navigate(['/login']);

      // 并阻止用户进入到登录才能进入的主页面
      return false;
    } else if (url.includes('login') || url.includes('register')) {
      // 访问 【登录】 和 【注册】 页面，如果是已登录的，阻止访问 【登录】 和 【注册】 页面
      return sessionStorage.getItem('token') ? false : true;
    }
  }
}
