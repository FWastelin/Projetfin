import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  title = 'Projetfin';
  public slides = [
    { src:"/../assets/img/aikido1.jpg" },
    { src:"/../assets/img/aikido2.jpg" },
    { src:"/../assets/img/aikido3.jpg" },
    { src:"/../assets/img/aikido4.jpg" },
    { src:"/../assets/img/aikido5.jpg" },
    { src:"/../assets/img/aikido6.jpg" }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  


}
