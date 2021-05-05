import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewReservation } from 'src/app/models/reservation/newReservation.model';
import { Reservation } from 'src/app/models/reservation/reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  nombre : number = 10;
  reservations : Reservation[];
  fg : FormGroup;
  reservation : Reservation;

  constructor(
    private _reservationService : ReservationService,

  ) { }

  ngOnInit(): void {
  }
  increase(){
    this.nombre++
  }
  decrease(){
    this.nombre--
  }
  add(reservation: NewReservation){
    this._reservationService.add(this.fg.value).subscribe({
      next : () => {
        this._reservationService.getAll().subscribe(reservations => this.reservations = reservations)
      }
    })
  }                      
  toDelete(id : number){
    this._reservationService.delete(id)
                            .subscribe(() => this.reservations = this.reservations.filter(reservation => this.reservation.id_reservation !== id));
  }

}
