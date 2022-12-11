import { AuthService } from 'src/app/Service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserpassgarudGuard implements CanActivate {
  constructor(private AuthService:AuthService,private router:Router){
  
  }
  canActivate(){
    //if only user can pass
    if (this.AuthService.currentUserValue) {
      if (this.AuthService.currentUserValue.role==="USER") {
        return true;
      }
      
      
    }
    this.router.navigate(['/'])
    return false
  }
  
}
