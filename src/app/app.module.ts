import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { AppRoutingModule } from './app.routing.module';
import { MissingComponent } from './view/missing/missing.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
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
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
