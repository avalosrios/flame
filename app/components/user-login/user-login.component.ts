import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'user-login',
  templateUrl: 'app/components/user-login/user-login.component.html',
  styleUrls: [
    'app/shared/assets/styles/forms.css',
    'app/components/user-login/user-login.component.css'
  ]
})

export class UserLoginComponent{
  public title = 'Login';
  public submitted = false;
  public active=true; // flag to be able to recreate the form when submitted

  constructor(private _userService: UserService){
    // this.model = this._userService.addUser();
  }

  onSubmit(){
    this.submitted = true;
    // TODO do some request
  }


}
