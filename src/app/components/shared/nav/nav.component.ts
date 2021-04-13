import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }
  toHome(){
    this._router.navigate(['home']);
  }
  toAgenda(){
    this._router.navigate(['agenda']);
  }
  toDojo(){
    this._router.navigate(['dojo']);
  }
  toContact(){
    this._router.navigate(['contact']);
  }
}
