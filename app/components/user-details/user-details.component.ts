import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {NgSwitch, NgSwitchWhen, NgSwitchDefault} from 'angular2/common';

import {User} from '../users/user';
import {UserService} from '../../services/user.service';
import {UserRegisterComponent} from '../user-register/user-register.component';
import {UserFormComponent} from '../user-form/user-form.component';

@Component({
  selector: 'user-details',
  inputs: ['user'],
  templateUrl: 'app/components/user-details/user-details.component.html',
  styleUrls: [],
  directives: [
    NgSwitch,
    NgSwitchWhen,
    NgSwitchDefault,
    UserFormComponent ]
})

export class UserDetailsComponent implements OnInit{
  public title = "User Profile";
  public user: User;
  public editable: boolean = false;
  public actionButtonText: string;
  public error: string;

  constructor(
    private _userService: UserService,
    private _routeParams: RouteParams){}

  ngOnInit(){
    let id = +this._routeParams.get('id'); // get the id from params
    this._userService.getUser(id)
          .subscribe(
            user => this.user = user,
            error => this.error = <any>error)
    this.actionButtonText = 'Edit';
  }

  goBack(){
    window.history.back();
  }

  goEdit(){
    this.editable = true;
    console.log('edit user');
  }

  onSubmit(arg){
    console.log("Do something", arg);
    // change to non editable
    this.editable = false;
  }
}
