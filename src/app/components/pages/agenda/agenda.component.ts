import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  fg : FormGroup;
  fgIdentify : FormGroup
  users : User[] = [];
  user : User;
  id : number;

  constructor(
    private _userService : UserService,
    private _builder : FormBuilder,
    private _router : Router,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      prenom : ['', [Validators.required]],
      nom : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    });

    this.fgIdentify = this._builder.group({email : ['', [Validators.required, Validators.email]],password : ['', [Validators.required]]});
  
  }
  onSubmit(){
    if(this.fg.invalid){
      return;
    }
    this._userService.add(this.fg.value).subscribe({
      next : () => {
        
        this._router.navigate(['/client'])
      }

    })
  }
  identifyForm(){
    if(this.fgIdentify.invalid){
      return;
    }
    this._userService.login(this.fgIdentify.value.email, this.fgIdentify.value.password).subscribe(data => this.users = data)
    this._router.navigate(['/client'])
  }

}
