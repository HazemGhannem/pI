import { Etudiant } from './../../Model/etudiant';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Role } from 'src/app/enum/role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser : Etudiant = new Etudiant();
  data:any
  admin= Role.ADMIN;
  constructor(private router: Router,private service:AuthService) { }

  ngOnInit(): void {
    this.service.currentUser.subscribe(data => {
      this.currentUser = data
    })
  }

  isAdmin(){
    return this.currentUser.role === Role.ADMIN
  }


  logOut(email:any) {
    this.service.UserOff(email).subscribe((d)=>console.log(d))
    this.service.logOut();
    this.router.navigate(['/login'])
  }
 
}
