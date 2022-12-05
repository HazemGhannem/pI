import { Etudiant } from './../../Model/etudiant';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  AllEtudiant!:Etudiant[]
  
  constructor(public service:AuthService) { }

  ngOnInit(): void {
    this.service.GetAllUser().subscribe((d)=>{
      this.AllEtudiant=d
    })

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
 

}
