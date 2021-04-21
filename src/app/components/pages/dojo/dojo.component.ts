import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dojo',
  templateUrl: './dojo.component.html',
  styleUrls: ['./dojo.component.scss']
})
export class DojoComponent implements OnInit {
  showProf: boolean =true
  showDojo: boolean = false
  showAssistant:boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  eventShowProf(){
    this.showProf = true
    this.showDojo = false
    this.showAssistant = false
  }
  eventShowDojo(){
    this.showProf = false
    this.showDojo = true
    this.showAssistant = false
  }
  eventShowAssistant(){
    this.showProf = false
    this.showDojo = false
    this.showAssistant = true
  }

}
