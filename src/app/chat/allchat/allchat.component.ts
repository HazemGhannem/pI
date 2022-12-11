import { ActivatedRoute } from '@angular/router';
import { EtudiantServiceService } from './../../Service/etudiant-service.service';
import { AuthService } from 'src/app/Service/auth.service';
import { ChatMessage } from './../../Model/chat-message';
import { Etudiant } from './../../Model/etudiant';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-allchat',
  templateUrl: './allchat.component.html',
  styleUrls: ['./allchat.component.css']
})
export class AllchatComponent implements OnInit {
  currentUser : Etudiant = new Etudiant();
  title = 'WebSocketChatRoom';
  etudiant?:Etudiant;
  id?:number
  listchat!:ChatMessage[]
  messagee!: ChatMessage;
  chat!:ChatMessage[]
  newMessage = new FormControl('');
  greetings: any[] = [];
  greetings2: any[] = [];
  disabled = true;
  newmessages!: string;
  private stompClient:any = null;
  constructor(public service:AuthService, public es:EtudiantServiceService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      console.log(this.id)
  })
  this.service.getuserbyId(this.id).subscribe((d)=>this.etudiant=d)

    this.connect();

    this.service.currentUser.subscribe(data => {
      this.currentUser = data
    })
  }
  setConnected(connected: boolean) {
    this.disabled = !connected;
    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
     
    const socket = new SockJS('http://localhost:5000/api/authentication/chat');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame:any) {
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/start/public', function(hello:any){
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
      '/current/data',
      {},
      JSON.stringify({
        sender:this.currentUser,
        reciver:this.etudiant,
        content:this.newmessages,
      })
    );
    console.log("zezezezez")
    this.es.updatechat(this.messagee,this.etudiant?.idEtudiant,this.currentUser.idEtudiant).subscribe((first)=>console.log(first))
    this.newMessage.setValue('');
  }
}
  showMessage(message:any) {
    this.messagee= message
    console.log(this.messagee)
    this.greetings2.push(this.messagee.content) 
    
    //  this.es.getchat(this.currentUser.idEtudiant,this.id).subscribe((d)=>{
    //   this.listchat=d;
    //   console.log(this.listchat)
    //  }) 
    // this.chat?.map((o)=>this.greetings2.push(o.content))
    
  }


}
