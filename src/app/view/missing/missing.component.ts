import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.scss']
})
export class MissingComponent implements OnInit {

  errorMsg = 'Oops! 页面没有找到...';

  reLogin() {
    // sessionStorage.clear();
    // this.loginService.isLoggedIn = false;
    // this.router.navigate(['/login']);
  }

  constructor() { }

  ngOnInit() {
    this.errorMsg = 'Oops! 页面没有找到...';
  }

}
