import { Etudiant } from './../Model/etudiant';
import { AuthService } from 'src/app/Service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsergarudGuard implements CanActivate {
  constructor(private AuthService:AuthService,private router:Router){
    
    
  }
  canActivate(){
    //if admin can pass
    if (this.AuthService.currentUserValue.role==="ADMIN") {
      return true;
      
    }
    //AZEAZE222@gmail.com
    this.router.navigate(['/profile'])
    return false
  }
  
}
