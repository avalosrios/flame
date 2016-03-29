import {Component, OnInit, EventEmitter, Input, Output} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {User} from '../users/user';

@Component({
  selector: 'user-form',
  templateUrl: 'app/components/user-form/user-form.component.html',
  styleUrls: [
    'app/shared/assets/styles/forms.css',
    'app/components/user-form/user-form.component.css'
  ],
  inputs: ['user'],
  outputs: ['onSubmitEvent']
})

export class UserFormComponent implements OnInit{
  public user: User;
  public onSubmitEvent: EventEmitter<any> = new EventEmitter();;
  public actionText = 'Register';
  public submitted = false;
  public active = true;
  public new_user = false;


  ngOnInit(){
    console.log('User Register on Init', this.user);
    if(this.user === undefined){
      // create a new user
      this.user = new User(0, '','', '');
      // this.new_user = true; uncomment this for password confirmation
    }else{
      this.actionText = 'Edit';
    }
  }

  onSubmit(){
    //this.submitted = true;
    this.onSubmitEvent.next(this.user);
  }

}
