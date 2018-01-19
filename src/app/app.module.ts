import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared';
import { ViewModule } from './component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { MissingComponent } from './view/missing/missing.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ArticleComponent } from './view/home/article/article.component';
import { SettingComponent } from './view/home/setting/setting.component';
import { UserComponent } from './view/home/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MissingComponent,
    DashboardComponent,
    ArticleComponent,
    SettingComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    // 蚂蚁金服 UI 组件模块
    NgZorroAntdModule,
    // 公用方法模块
    SharedModule,
    // 页面元素模块
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
