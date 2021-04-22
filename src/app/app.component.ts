import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projetfin';
  public slides = [
    { src:"/../assets/img/aikido1.jpg" },
    { src:"/../assets/img/aikido2.jpg" },
    { src:"/../assets/img/aikido4.jpg" }
  ];
}
