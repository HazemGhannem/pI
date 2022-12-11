import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TacheComponent } from './tache/tache.component';
import { DetailTacheComponent } from './detail-tache/detail-tache.component';


@NgModule({
  declarations: [
    ProfileComponent,
    TacheComponent,
    DetailTacheComponent,
    
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class ProfileModule { }
