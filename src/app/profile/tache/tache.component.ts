import { BehaviorSubject } from 'rxjs';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  hide:Boolean=false
  showorhide=this.hide
  
  @Output() refreshevent = new EventEmitter<BehaviorSubject<Boolean>>();

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.hide=true
  }
  getitem(val:any){
    this.hide=val
    this.refreshevent.emit();
    
  }

}
