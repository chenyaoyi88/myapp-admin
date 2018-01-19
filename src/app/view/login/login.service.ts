import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API } from '../../api';
import { AjaxService } from '../../shared';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(private ajax: AjaxService) {}

  userLogin(userInfo: Login_params) {
    return this.ajax.post(API.user.login, userInfo);
  }
}
