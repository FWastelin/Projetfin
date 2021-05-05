import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user/user.model';
import { newUser } from '../models/user/newUser.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _client : HttpClient,
    //private _authService : AuthService,
  ) { }
  getAll() : Observable<User[]>{
    return this._client.get<User[]>(`${environment.apiUrl}/user`);
  }
  add(user : User){
    console.log(user)
    return this._client.post(`${environment.apiUrl}/user`, user);
  }
  delete(id : number){
    return this._client.delete(`${environment.apiUrl}/user/${id}`);
  }
  getById(id : number) : Observable<User[]>{
    return this._client.get<User[]>(`${environment.apiUrl}/user/${id}`);
  }

  login(email : string, password : string){
    return this._client.post<any>(`${environment.apiUrl}/user`, {email, password})
  }

  update(id : number, user: newUser){
    return this._client.put(`${environment.apiUrl}/user/${id}`, user);
  }
}
