import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent
  ]
})
export class DashboardModule { }
