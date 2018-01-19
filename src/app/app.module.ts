// 框架原生模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

// 第三方 UI 组件模块
import { NgZorroAntdModule } from 'ng-zorro-antd';

// 自己封装的模块
import { SharedModule } from './shared';
import { ViewModule } from './component';
import { AppRoutingModule } from './app.routing.module';

// 主页面模块
import { AdminModule } from './view/admin';

// 未封装的模块
import { AppComponent } from './app.component';

import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { MissingComponent } from './view/missing/missing.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
    MissingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    // 蚂蚁金服 UI 组件模块
    NgZorroAntdModule,
    // 公用方法模块
    SharedModule,
    // 页面元素模块
    ViewModule,
    // 主页面模块
    AdminModule,
    // 路由模块（放最后）
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
