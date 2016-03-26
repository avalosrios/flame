import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {UserLoginComponent} from './user-login/user-login.component';

//Services
import {UserService} from '../services/user.service';

@Component({
  selector: 'my-app',
  directives: [
    ROUTER_DIRECTIVES,
    UserRegisterComponent
  ],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    UserService
  ],
  templateUrl: 'app/components/app.component.html',
  styleUrls: ['app/components/app.component.css'],
})

@RouteConfig([
  {
    path: '/users',
    name: 'Users',
    component: UsersComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetailsComponent
  },
  {
    path: '/register',
    name: 'Register',
    component: UserRegisterComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: UserLoginComponent
  }
])

export class AppComponent extends Component{
  public title = 'Flame Project';
}
