import { Etudiant } from './../Model/etudiant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessageLogin:String=""

  formgroup = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  })

  constructor(private fb: FormBuilder, private service:AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  get email(){
    return this.formgroup.get('email');
  }

  get password(){
    return this.formgroup.get('password');
  }

  login(user:Etudiant){
    this.service.login(user).subscribe(
      
      (e) =>  {
         if (e.role ==="ADMIN") {
          this.router.navigate(['/dashboard/users'])
         }else{
          this.router.navigate(['/profile'])
        }
    }, err => { 
      if (err?.status === 403 ){
        this.errorMessageLogin = 'Bad credentials '
      }else{
      this.errorMessageLogin = 'Unxpected error. Erro is: '+ err?.errorMessageLogin;
      }
  }) 
  }
}
