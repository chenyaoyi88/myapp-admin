import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { NzMessageService } from 'ng-zorro-antd';
import md5 from 'md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [NzMessageService, RegisterService]
})
export class RegisterComponent implements OnInit {
  validateFormRegister: FormGroup;

  // 密码input是否focus, 猫头鹰
  isPwdFocus = false;
  // 注册按钮loading
  isLoading = false;

  _submitFormRegister() {
    for (const i in this.validateFormRegister.controls) {
      this.validateFormRegister.controls[i].markAsDirty();
    }

    const registerParams: Register_params = this.validateFormRegister.value;

    if (
      !(
        registerParams.username ||
        registerParams.password ||
        registerParams.password2
      )
    ) {
      return;
    } else if (registerParams.password.length < 6) {
      this._message.create('warning', '密码最少必须是6位');
      return;
    } else if (registerParams.password2 !== registerParams.password) {
      this._message.create('warning', '两次输入的密码不一致，请重新输入');
      return;
    }

    this.isLoading = true;

    registerParams.password = md5(registerParams.password);
    delete registerParams.password2;

    this.register.userRegister(registerParams).subscribe(
      (res: APP_Response<null>) => {
        switch (res.code) {
          case '0000':
            // 注册成功
            this._message.create('success', '注册成功');
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
            break;
          case '1001':
            // 记录已存在
            this._message.create('info', res.msg);
            this.isLoading = false;
            break;
          default:
            // 其他
            this._message.create('warning', res.msg);
            this.isLoading = false;
        }
      },
      (err: any) => {
        console.log(err);
        this.isLoading = false;
        this._message.create('error', '请求注册接口失败');
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
    private register: RegisterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.validateFormRegister = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      password2: [null, [Validators.required]]
    });
  }
}
