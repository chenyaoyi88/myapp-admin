import { environment } from '../../environments/environment';

const APP_ENV: boolean = environment.production;

console.log('当前环境:' + APP_ENV ? '开发' : '生产');

let HOST = '';

if (APP_ENV) {
  // 开发环境
  HOST = '//www.kissyy.cn/';
} else {
  // 生产环境
  HOST = '//127.0.0.1:8888/';
}

export const API = {
  // 用户
  user: {
    // 登录
    login: HOST + 'user/login',
    // 注册
    register: HOST + 'user/register',
    // 退出
    logout: HOST + 'user/logout'
  }
};
