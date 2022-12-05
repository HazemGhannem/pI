import { UserpassgarudGuard } from './garud/userpassgarud.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarudGuard } from './garud/garud.guard';
import { UsergarudGuard } from './garud/usergarud.guard';

const routes: Routes = [
 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
 { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),canActivate:[UserpassgarudGuard] },
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) ,canActivate:[UsergarudGuard]},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
