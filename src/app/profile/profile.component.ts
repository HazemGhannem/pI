import { FormBuilder, Validators } from '@angular/forms';
import { Etudiant } from './../Model/etudiant';
import { AuthService } from 'src/app/Service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser : Etudiant = new Etudiant();
  
  constructor(public service:AuthService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.service.currentUser.subscribe(data => {
      this.currentUser = data
    })
  }
  updateUser(user:Etudiant,id:any){
    this.service.updateuser(user,id).subscribe(()=>
    console.log("done"))
 
  }

  formgroupuser = this.fb.group({
    email: ['',[Validators.email]],
    nomE:['',[]],
    phonenumber:['',[]],
    prenomE:['',[]],
  })
  get email(){
    return this.formgroupuser.get('email');
  }

  get nomE(){
    return this.formgroupuser.get('nomE');
  }
  get prenomE(){
    return this.formgroupuser.get('prenomE');
  }
  get phonenumber(){
    return this.formgroupuser.get('phonenumber');
  }


}
