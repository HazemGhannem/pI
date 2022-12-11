import { Etudiant } from './../Model/etudiant';
import { Component, Input, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { AuthService } from '../Service/auth.service';
import { EtudiantServiceService } from '../Service/etudiant-service.service';
import { ChatMessage } from '../Model/chat-message';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  currentUser : Etudiant = new Etudiant();
  title = 'WebSocketChatRoom';
  etudiant?:Etudiant;
  id?:Observable<number>
  messagee!: ChatMessage;
  list!:ChatMessage[]
  list2!:ChatMessage[]
  all!:ChatMessage[]
  newMessage = new FormControl('');
  newmessages!: string;
  refresh$ = new BehaviorSubject<Boolean>(true)
  private stompClient:any = null;
  disabled=true
  constructor(public service:AuthService, public es:EtudiantServiceService,private route: ActivatedRoute ){}
  ngOnInit() { 
   
    this.refresh$.pipe((switchMap(_=>this.route.params))).subscribe(params =>{
      this.id = params['id']
      console.log(this.id)
    })
  this.service.getuserbyId(this.id).subscribe((d)=>this.etudiant=d)

    this.connect();

    this.service.currentUser.subscribe(data => {
      this.currentUser = data
    })

    this.es.getchat(this.currentUser.idEtudiant,this.id).subscribe((d)=>{
      this.all=d;
      console.log(this.all)
    }) 
    this.es.getchat(this.id,this.currentUser.idEtudiant).subscribe((d)=>{
      this.list2=d
      this.all=this.all.concat(d).sort((a,b)=>Number(a.id) - Number(b.id))
      console.log(this.list2)
      console.log(this.all)
    }) 
    //this.refreshmsglist.pipe(switchMap(_=>this.es.getchat(this.id,this.currentUser.idEtudiant)));
 
  }
  

  connect() { 
    const socket = new SockJS('http://localhost:5000/api/authentication/chat');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame:any) {
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/start/initial', function(hello:any){
        console.log(JSON.parse(hello.body));
        console.log(hello);
        console.log("first")
        _this.showMessage(JSON.parse(hello.body));
      });
   });
  }
  sendMessage() {
    if (this.newMessage.value !== '') {
    this.stompClient.send(
      '/current/resume',
      {},
      JSON.stringify({
        sender:this.currentUser,
        reciver:this.etudiant,
        content:this.newmessages,
      })
    );
    this.es.updatechat(this.messagee,this.etudiant?.idEtudiant,this.currentUser.idEtudiant).subscribe((first)=>console.log(first))
    this.es.getchat(this.currentUser.idEtudiant,this.id).subscribe((d)=>{
      this.list=d;
     }) 
     this.es.getchat(this.id,this.currentUser.idEtudiant).subscribe((d)=>{
       this.list2=d;
      }) 
      this.all=this.list.concat(this.list2)
    this.newMessage.setValue('');
  }
}
  showMessage(message:any) {
    this.messagee= message
     this.es.getchat(this.currentUser.idEtudiant,this.id).subscribe((d)=>{
      this.list=d;

     }) 
     this.es.getchat(this.id,this.currentUser.idEtudiant).subscribe((d)=>{
       this.list2=d;
      }) 
      this.all = this.list.concat(this.list2)
      this.all.push(message)
     console.log(this.all.sort((a:any,b:any)=>new Date (a.senddate).getTime() - new Date (b.senddate).getTime()))
  }
 
} 