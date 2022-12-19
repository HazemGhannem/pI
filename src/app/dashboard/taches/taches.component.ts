import { BehaviorSubject, switchMap } from 'rxjs';
import { Etudiant } from './../../Model/etudiant';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';



@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  AllEtudiant?:Etudiant[]
  id=0
  sort:any
  totalPages!:number
  refresh$=new BehaviorSubject<Boolean>(true)
  
 
  constructor(public service:AuthService) {}
  
  ngOnInit(): void {
    // this.service.GetAllUser(this.id,this.sort).subscribe((d)=>{
    //   this.AllEtudiant =d.content
    //   this.totalPages=d.totalPages
    //   this.last=d.last
    //   this.first=d.first
    // })
    this.refresh$.pipe(switchMap(_=>this.service.GetAllUser(this.id,this.sort))).subscribe ((d)=>{
      this.AllEtudiant =d.content
      this.totalPages=d.totalPages
    })  
   
    
  }
  getpage(i:number){
      this.id=i
      this.refresh$.next(true)
  }
  counter(i: number) {
    return new Array(i);
}
  next(val:any){
    
    if(val-1>this.id){
      this.id=this.id+1
      this.refresh$.next(true)
    }else{
      this.id=val-1
    }
  }
  prev(){
    if(this.id!==0){
      this.id=this.id-1
      this.refresh$.next(true)
    }else
    this.id=0
  }
  BannUser(etudiant:Etudiant){
    etudiant.banned=true;
    this.service.BannUser(etudiant).subscribe((d)=>{
        console.log(d)
    })
  }
  UnBannUser(etudiant:Etudiant){
    etudiant.banned=false;
    this.service.BannUser(etudiant).subscribe((d)=>{
        console.log(d)
    })
  }
  setname(val:any){
      this.sort=val
      console.log(this.sort)
      this.refresh$.next(true)
  }

}
