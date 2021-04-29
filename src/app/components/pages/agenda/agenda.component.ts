import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  fg : FormGroup;
  users : User[];
  user : User;

  constructor(
    private _userService : UserService,
    private _builder : FormBuilder,
    private _router : Router,
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      prenom : ['', Validators.required],
      nom : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
    })
    this._userService.getAll().subscribe(users => this.users = users)
  }
  onSubmit(){
    if(this.fg.invalid){
      return;
    }
    this._userService.add(this.fg.value).subscribe({
      next : () => {
        this._userService.getAll().subscribe(users => this.users = users)
        this._router.navigate(['/client'])
      }
    })
  }

}
