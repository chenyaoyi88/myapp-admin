import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ArticleComponent } from './article';
import { SettingComponent } from './setting';
import { UserComponent } from './user';
import { DashboardComponent } from './dashboard';

const adminRoutes: Routes = [
  {
    // 默认路由到 admin
    path: 'admin',
    component: AdminComponent,
    data: { title: '首页' },
    children: [
      {
        path: '',
        redirectTo: 'dashborad',
        pathMatch: 'full',
        data: { title: '仪表盘' }
      },
      {
        path: 'dashborad',
        component: DashboardComponent,
        data: { title: '仪表盘' }
      },
      {
        path: 'article',
        component: ArticleComponent,
        data: { title: '文章列表' }
      },
      {
        path: 'setting',
        component: SettingComponent,
        data: { title: '设置' }
      },
      {
        path: 'user',
        component: UserComponent,
        data: { title: '用户' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
