import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TachesComponent } from './taches/taches.component';





@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    TachesComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
