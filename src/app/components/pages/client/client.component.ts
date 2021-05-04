import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  nombre : number = 10;

  constructor() { }

  ngOnInit(): void {
  }
  increase(){
    this.nombre++
  }
  decrease(){
    this.nombre--
  }

}
