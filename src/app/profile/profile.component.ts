import { Tahces } from './../Model/tahces';
import { Observable, BehaviorSubject, switchMap} from 'rxjs';
import { EtudiantServiceService } from './../Service/etudiant-service.service';
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
  User$?:Observable<Etudiant[]> 
  refresh$ = new BehaviorSubject<Boolean>(true)
  hide=true
  hide2=false
  showorhide=this.hide
  tache!:Observable<Tahces[]>
  
  constructor(public service:AuthService,private fb: FormBuilder,private s:EtudiantServiceService) { }

  ngOnInit(): void {
    this.service.currentUser.subscribe(data => {
      this.currentUser = data
    })
    this.User$=this.refresh$.pipe(switchMap(_ =>
      this.s.getAllStudent()
    ))
    
    
    this.tache =this.refresh$.pipe(switchMap( _=>
      this.service.getTach()))
  
  }
  hideobj(){
    this.hide=false
    this.hide2=true
  }
  hidesettings(){
    this.hide=true
    this.hide2=false
  }
  get(){
    this.refresh$.next(true)
  }
  updateUser(user:Etudiant,id:any){
    this.service.updateuser(user,id).subscribe(()=>
    console.log("done"))
  }
  deletetache(id:any){
    this.service.deleteTach(id).subscribe(()=>{console.log("tache deleted")
    this.refresh$.next(true)
  })
    

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
