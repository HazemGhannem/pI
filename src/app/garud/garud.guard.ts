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
    //if user can pass
    if (this.AuthService.currentUserValue) {
      return true;
      
    }
    this.router.navigate(['/login'])
    return false
  }
  
}
