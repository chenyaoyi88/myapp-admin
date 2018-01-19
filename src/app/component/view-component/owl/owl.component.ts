import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owl',
  templateUrl: './owl.component.html',
  styleUrls: ['./owl.component.scss']
})
export class OwlComponent implements OnInit {

  // 密码input是否focus, 猫头鹰
  isPwdFocus = false;

  @Input()
  get pwdFocus() {
    return this.isPwdFocus;
  }

  set pwdFocus(isPwdFocus: boolean) {
    this.isPwdFocus = isPwdFocus;
  }

  constructor() {}

  ngOnInit() {}
}
