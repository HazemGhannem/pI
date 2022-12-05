import { environment } from './../../environments/environment';
import { Etudiant } from './../Model/etudiant';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tahces } from '../Model/tahces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AdminHost=environment.AdminHost
  authentication=environment.ClientHost
  host=environment.host;
  public formdata!: FormGroup;


  public currentUser!: Observable<Etudiant>;
  private currentUserSubject: BehaviorSubject<Etudiant>;

  constructor(private http:HttpClient) { 
    let storageUser;
    const storageUserAsStr = localStorage.getItem('currentUser') ;
    if(storageUserAsStr){
      storageUser = JSON.parse(storageUserAsStr);
    }
    this.currentUserSubject = new BehaviorSubject<Etudiant>(storageUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
     
  public get currentUserValue(): Etudiant {
    return this.currentUserSubject.value;
  }

  addUser(info: Object): Observable<Object> {
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      })
    }
    return this.http.post<Etudiant>(this.authentication+"/sign-up",info,HTTPOptions)
  }


  login(etudiant: Etudiant): Observable<any> {
    return this.http.post<any>(this.authentication+ '/sign-in', etudiant).pipe(
      map(response => {
        if(response) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response; 
      })
    )
  }
  UserOff(email:any): Observable<any>{
    let HTTPOptions:Object = {

      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      }),
      responseType: 'text'
   }
    return this.http.put<any>(this.authentication+ '/useroff',email,HTTPOptions)
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new Etudiant);
  }
  getImage(id:any): Observable<any>{
    return this.http.get<any>(this.authentication+`/image/${id}`)
  }

  updateuser(etudiant:Etudiant ,id:any): Observable<Etudiant>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      })
    }
    return this.http.put<Etudiant>(this.authentication+`/updateuser/${id}`,etudiant,HTTPOptions)
  }

  getuserbyId(id:any):Observable<Etudiant>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      })
    }
  return this.http.get<Etudiant>(this.authentication+`/showuser/${id}`,HTTPOptions)
  }

  //ADMIN Functions
  getusernumber():Observable<number>{
    let HTTPOptions:Object = {

      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      })
    }
      return this.http.get<number>(this.AdminHost+`/getusernumber`,HTTPOptions)
  }
  getStatistic():Observable<number>{
    let HTTPOptions:Object = {

      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      })
    }
    return this.http.get<number>(this.AdminHost+`/getstatistic`,HTTPOptions)
  }
  GetAllUser():Observable<Etudiant[]>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      })
    }
      return this.http.get<Etudiant[]>(this.AdminHost+`/showallusers`,HTTPOptions)
    
  }

  BannUser(etudiant:Etudiant):Observable<any>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      }),
      responseType: 'text'
    }
      return this.http.put<any>(this.AdminHost+`/bannuser`,etudiant,HTTPOptions)
    
  }


  //Tach CRUD

  addTache(tach:Tahces):Observable<Tahces>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      }),
      responseType: 'text'
    }
    return this.http.post<Tahces>(this.AdminHost+"/addtach",tach,HTTPOptions)
  }
  getTach():Observable<Tahces[]>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      }),
    }
    return this.http.get<Tahces[]>(this.AdminHost+"/getalltach",HTTPOptions)
  }
  getTachById(id:any):Observable<Tahces>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      }),
      responseType: 'text'
    }
    return this.http.get<Tahces>(this.AdminHost+`/gettach/${id}`,HTTPOptions)
  }
  UpdateTache(Tache:Tahces,id:any):Observable<Tahces>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      }),
      responseType: 'text'
    }
    return this.http.put<Tahces>(this.AdminHost+`/gettach/${id}`,Tache,HTTPOptions)
  }
  deleteTach(id:any):Observable<Tahces>{
    let HTTPOptions:Object = {
      headers: new HttpHeaders({
        authorization: `Bearer ${this.currentUserValue?.token}`,
        'content-type': 'application/json; charset=utf-8',
      }),
      responseType: 'text'
    }
    return this.http.delete<Tahces>(this.AdminHost+`/delete/${id}`,HTTPOptions)
  }



  
}
