import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewReservation } from '../models/reservation/newReservation.model';
import { Reservation } from '../models/reservation/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private _client : HttpClient
  ) { }

  getAll(){
    return this._client.get<Reservation[]>(`${environment.apiUrl}/reservation`);
  }
  getById(id : number) : Observable<Reservation[]>{
    return this._client.get<Reservation[]>(`${environment.apiUrl}/reservation/${id}`);
  }
  update(id : number, reservation: NewReservation){
    return this._client.put(`${environment.apiUrl}/reservation/${id}`, reservation);
  }
  add(reservation: NewReservation){
    return this._client.post(`${environment.apiUrl}/reservation`, reservation);
  }
  delete(id : number){
    return this._client.delete(`${environment.apiUrl}/reservation/${id}`);
  }
}
