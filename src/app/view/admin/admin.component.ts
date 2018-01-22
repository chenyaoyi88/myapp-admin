import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminService, NzMessageService]
})
export class AdminComponent implements OnInit {
  isCollapsed = false;
  sUsername = '';

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

  constructor(
    private router: Router,
    private confirmServ: NzModalService,
    private _message: NzMessageService,
    private admin: AdminService
  ) {
    this.sUsername = sessionStorage.getItem('username');
  }

  ngOnInit() {}

  logout() {
    const _this = this;
    this.confirmServ.confirm({
      title: '您是否确认要退出登录？',
      // content: '点确认 1 秒后关闭',
      showConfirmLoading: true,
      onOk() {
        _this.admin.userLogout().subscribe(
          (res: APP_Response<null>) => {
            console.log(res);
            if (res.code === '0000') {
              sessionStorage.removeItem('token');
              sessionStorage.removeItem('username');
              _this.router.navigate(['/login']);
            } else {
              _this._message.create('warning', res.msg);
            }
          },
          (err: any) => {
            console.log(err);
            _this._message.create('warning', '用户退出请求失败');
          }
        );
      },
      onCancel() {}
    });
  }

  navClick(index, nav) {
    this.router.navigate([nav.link]);
  }
}
