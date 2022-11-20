import { environment } from './../../environments/environment';

import { Etudiant } from './../Model/etudiant';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
 clientHost= environment.clienthost
 

  constructor(private http:HttpClient) { }

  getAllStudent():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.clientHost+"/show")
  }
}
