import { environment } from './../../environments/environment';

import { Etudiant } from './../Model/etudiant';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Tahces } from '../Model/tahces';
import { ChatMessage } from '../Model/chat-message';



@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
 clientHost= environment.ClientHost
  AdminHost=environment.AdminHost
  authentication=environment.ClientHost
  host=environment.host;
  constructor(private http:HttpClient) { }

  getAllStudent():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.clientHost+"/show")
  }

 getchat(ids:any,idr:any):Observable<ChatMessage[]>{
 
  return this.http.get<ChatMessage[]>(this.authentication+ `/getchatbetwinsandr/${ids}/${idr}`)
}
 updatechat(chat:ChatMessage , id:any,ids:any):Observable<ChatMessage>{
  return this.http.put<ChatMessage>(this.clientHost+`/updatechat/${ids}/${id}`,chat)
 }
 

  

}
