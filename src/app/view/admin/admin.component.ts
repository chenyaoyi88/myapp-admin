import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed = false;

  navList: Array<NavList> = [
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
