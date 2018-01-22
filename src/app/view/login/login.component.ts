import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NzMessageService } from 'ng-zorro-antd';
import md5 from 'md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NzMessageService, LoginService]
})
export class LoginComponent implements OnInit {
  validateFormLogin: FormGroup;

  // 密码input是否focus, 猫头鹰
  isPwdFocus = false;
  // 注册按钮loading
  isLoading = false;

  _submitFormLogin() {
    for (const i in this.validateFormLogin.controls) {
      this.validateFormLogin.controls[i].markAsDirty();
    }

    const loginParams: Login_params = this.validateFormLogin.value;

    if (!(loginParams.username || loginParams.password2)) {
      return;
    }

    this.isLoading = true;

    const loginRequest: Login_params = {
      username: loginParams.username,
      password:  md5(loginParams.password)
    };

    this.login.userLogin(loginRequest).subscribe(
      (res: APP_Response<Login_Response>) => {
        console.log(res);
        switch (res.code) {
          case '0000':
            // 登录成功
            this._message.create('success', '登录成功');
            setTimeout(() => {
              this.router.navigate(['/admin']);
            }, 1000);
            // 存token在本地
            sessionStorage.setItem('token', res.data.token);
            sessionStorage.setItem('username', res.data.username);
            break;
          case '1004':
            // 记录已存在
            this._message.create('info', '用户被冻结，请联系工作人员解冻');
            this.isLoading = false;
            break;
          default:
            // 其他，例如
            // 1002：用户不存在
            // 1003：密码有误
            this._message.create('warning', '用户名或密码有误');
            this.isLoading = false;
        }
      },
      (err: any) => {
        console.log(err);
        this.isLoading = false;
        this._message.create('error', '请求登录接口失败');
      }
    );
  }

  // 密码动画效果
  owlEffectOn() {
    this.isPwdFocus = true;
  }

  owlEffectOff() {
    this.isPwdFocus = false;
  }

  constructor(
    private fb: FormBuilder,
    private _message: NzMessageService,
    private login: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.validateFormLogin = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
