import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cours } from '../models/cours/cours.model';
import { Observable } from 'rxjs';
import { newCours } from '../models/cours/newCours.model';


@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(
    private _client : HttpClient
  ) { }
  getAll(){
    return this._client.get<Cours[]>(`${environment.apiUrl}/cours`);
  }
  getById(id : number) : Observable<Cours[]>{
    return this._client.get<Cours[]>(`${environment.apiUrl}/cours/${id}`);
  }
  update(id : number, cours : newCours){
    return this._client.put(`${environment.apiUrl}/cours/${id}`, cours);
  }
  add(cours : newCours){
    return this._client.post(`${environment.apiUrl}/cours`, cours);
  }
  delete(id : number){
    return this._client.delete(`${environment.apiUrl}/cours/${id}`);
  }
  
  
}

