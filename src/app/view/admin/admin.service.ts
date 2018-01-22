import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API } from '../../api';
import { AjaxService } from '../../shared';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  constructor(private ajax: AjaxService) {}

  userLogout(): Observable<any> {
    return this.ajax.get(API.user.logout);
  }
}
