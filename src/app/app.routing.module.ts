import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { MissingComponent } from './view/missing/missing.component';

import { LoginAuthService, LoginAuthGuard } from './services';

const routes: Routes = [
  // 默认路由到 admin
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  // admin 模块路由
  {
    path: 'admin',
    loadChildren: './view/admin/admin.module#AdminModule'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginAuthGuard],
    data: { title: '登录' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginAuthGuard],
    data: { title: '注册' }
  },
  { path: '**', component: MissingComponent, data: { title: '404' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [LoginAuthService, LoginAuthGuard]
})
export class AppRoutingModule {}
