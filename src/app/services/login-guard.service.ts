import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  // 检测登录状态：已登录 -> true 未登陆 -> false
  checkLogin(url: string): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    }

    // 存储试图重定向的URL
    this.loginService.redirectUrl = url;

    // 导航到登录页面，并阻止用户进入到登录才能进入的主页面
    this.router.navigate(['/login']);
    return false;
  }
}
