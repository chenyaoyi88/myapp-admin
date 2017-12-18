import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { MissingComponent } from './view/missing/missing.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: '首页' } },
    { path: 'login', component: LoginComponent, data: { title: '登录' } },
    { path: 'register', component: RegisterComponent, data: { title: '注册' } },
    { path: '**', component: MissingComponent, data: { title: '404' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
