import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { ArticleComponent } from './article';
import { SettingComponent } from './setting';
import { UserComponent } from './user';
import { DashboardComponent } from './dashboard';

import { NgZorroAntdModule } from 'ng-zorro-antd';

// import { HeroService } from './hero.service';
import { AdminRoutingModule } from './admin.routing.module';

// import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [CommonModule, FormsModule, NgZorroAntdModule, AdminRoutingModule],
  declarations: [
    AdminComponent,
    DashboardComponent,
    ArticleComponent,
    SettingComponent,
    UserComponent
  ],
  providers: [
    // AuthGuard
    //   HeroService
  ]
})
export class AdminModule {}
