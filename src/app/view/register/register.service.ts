import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API } from '../../api';
import { AjaxService } from '../../shared';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
  constructor(private ajax: AjaxService) {}

  userRegister(userInfo: Register_params) {
    return this.ajax.post(API.user.register, userInfo);
  }
}
