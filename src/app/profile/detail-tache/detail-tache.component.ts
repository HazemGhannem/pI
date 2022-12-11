import { BehaviorSubject } from 'rxjs';
import { AuthService } from './../../Service/auth.service';
import { Etudiant } from './../../Model/etudiant';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-detail-tache',
  templateUrl: './detail-tache.component.html',
  styleUrls: ['./detail-tache.component.css']
})
export class DetailTacheComponent implements OnInit {
  currentUser !:Etudiant
  user!:Etudiant
  @Input() hidee!:Boolean 
  @Output() newItemEvent = new EventEmitter<Boolean>();
  form = {
    name: '',
    type: '',
    startDate: '',
    endDate: '',
    description:'',
    etudiant:this.user,
  };

  onReset(form: NgForm): void {
    form.reset();
  }

  constructor(public service:AuthService) {}
    

  ngOnInit(): void {
    this.service.currentUser.subscribe(data => {
      this.currentUser = data
    })
   
  }
  addtache(){
    this.form.etudiant=this.currentUser
    this.service.addTache(this.form).subscribe((d)=>{console.log(d)
      this.service.behaviour()})
    this.hidee=false
    this.newItemEvent.emit(this.hidee);
    
    
  }

}
