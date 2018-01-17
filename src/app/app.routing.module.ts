import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { MissingComponent } from './view/missing/missing.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ArticleComponent } from './view/home/article/article.component';
import { SettingComponent } from './view/home/setting/setting.component';
import { UserComponent } from './view/home/user/user.component';

const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    {
        path: 'admin', component: HomeComponent, data: { title: '首页' }, children: [
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
    },
    { path: 'login', component: LoginComponent, data: { title: '登录' } },
    { path: 'register', component: RegisterComponent, data: { title: '注册' } },
    { path: '**', component: MissingComponent, data: { title: '404' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
