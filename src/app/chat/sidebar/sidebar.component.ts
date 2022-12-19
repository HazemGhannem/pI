import { Etudiant } from './../../Model/etudiant';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EtudiantServiceService } from 'src/app/Service/etudiant-service.service';
import { AuthService } from 'src/app/Service/auth.service';
import { BehaviorSubject, Observable,  switchMap } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  User$?:Observable<Etudiant[]> 
    @Output() refreshevent = new EventEmitter<BehaviorSubject<Boolean>>()
  
  refresh$ = new BehaviorSubject<Boolean>(true)
  constructor(private s:EtudiantServiceService,public service:AuthService) { }

  ngOnInit(): void {
    this.User$=this.refresh$.pipe(switchMap(_ =>
    this.s.getAllStudent()
  ))
  
  }
  get(){
    
    this.refresh$.next(true)
  }
  
}
