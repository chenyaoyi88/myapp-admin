import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCollapsed = true;

  navList: Array<any> = [
    {
      name: '文章',
      icon: 'anticon-file',
      link: '/admin/article'
    },
    {
      name: '设置',
      icon: 'anticon-setting',
      link: '/admin/setting'
    },
    {
      name: '用户',
      icon: 'anticon-user',
      link: '/admin/user'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navClick(index, nav) {
    this.router.navigate([nav.link]);
  }
}
