import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { ArticleComponent } from './article';
import { SettingComponent } from './setting';
import { UserComponent } from './user';
import { DashboardComponent } from './dashboard';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AdminRoutingModule } from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    ArticleComponent,
    SettingComponent,
    UserComponent
  ],
  providers: []
})
export class AdminModule {}
