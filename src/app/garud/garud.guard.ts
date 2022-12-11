import { AuthService } from 'src/app/Service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarudGuard implements CanActivate {
  constructor(private AuthService:AuthService,private router:Router){
  
  }
  canActivate(){
    //pass any user role
    if (this.AuthService.currentUserValue) {
      return true;
    }
    this.router.navigate(['/'])
    return false
  }
  
}
