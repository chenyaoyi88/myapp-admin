import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateFormLogin: FormGroup;

  // 密码input是否focus, 猫头鹰
  pwdFocus = false;

  _submitForm() {
    for (const i in this.validateFormLogin.controls) {
      this.validateFormLogin.controls[i].markAsDirty();
    }
    // this.validateForm.value
  }

  // 密码动画效果
  owlEffectOn() {
    this.pwdFocus = true;
  }

  owlEffectOff() {
    this.pwdFocus = false;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateFormLogin = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
