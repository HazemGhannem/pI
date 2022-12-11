import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotuserGuard implements CanActivate {
  constructor(private AuthService:AuthService,private router:Router){
  
  }
  canActivate()  {
    if (this.AuthService.currentUserValue) {
      this.router.navigate(['/'])
      return false;
    }
    
    return true
  }
  
}
