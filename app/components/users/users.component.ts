import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {User} from './user';

import {UserService} from '../../services/user.service';


@Component({
  selector: 'users-component',
  templateUrl: 'app/components/users/users.component.html',
  styleUrls: []
})

export class UsersComponent implements OnInit{
  public title = 'Users';
  public users : User [];
  public selectedUser : User;
  public errorMessage: String;

  constructor(
    private _userService: UserService,
    private _router: Router){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers()
                      .subscribe(
                        users => this.users = users,
                        error => this.errorMessage = <any>error);
    console.log(this.users);
    console.log("Error msj", this.errorMessage);                    
    //.then(users => this.users = users);
  }

  onSelect(user: User){
    // TODO use the service instead
    console.log('User selected', user.id);
    this.selectedUser = user;
    this.gotoUser();
  }

  gotoUser(){
    this._router.navigate(['UserDetails', {id: this.selectedUser.id}]);
  }
}
