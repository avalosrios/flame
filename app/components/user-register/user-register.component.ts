import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {NgForm} from 'angular2/common';
import {User} from '../users/user';

import {UserService} from '../../services/user.service';
import {UserFormComponent} from '../user-form/user-form.component';

@Component({
  selector: 'user-register',
  templateUrl: 'app/components/user-register/user-register.component.html',
  styleUrls: [
    'app/components/user-register/user-register.component.css',
    'app/shared/assets/styles/forms.css'
  ],
  directives: [
    UserFormComponent
  ]
})

export class UserRegisterComponent implements OnInit{
  public title = "New User";
  public user: User;
  public errorMessage: string;
  submitted = false;
  active=true; // flag to be able to recreate the form when submitted

  constructor(
    private _userService: UserService,
    private _router: Router ){}

  ngOnInit(){
  }

  onSubmit(e){
    console.log(e);
    this.submitted = true;
    this.save(e);
  }

  save(user: User){
    // TODO
    this.active = false;
    setTimeout(() => this.active=true, 0);
    setTimeout(() => this.submitted=false, 2000); // TODO add spinner or something
    this._userService.addUser(user).subscribe(
      user => {
        console.log("Saved success user",user);
        this.user = user;
        this.afterSave(this.user);
      },
      error => {
        this.errorMessage = <any>error;
        this.handleError(error);
      }
    );
  }

  afterSave(user: User){
    this.user = user;
    this.gotoUser();
  }

  handleError(err){
    console.log(err);
  }

  gotoUser(){
    this._router.navigate(['UserDetails', {id: this.user.id}]);
  }

  // TODO remove diagnostic method once we are done
  get diagnostic(){ return JSON.stringify(this.user); }
}
