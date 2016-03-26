import {User} from '../components/users/user';
import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

export var USERS : User[] =
[{"id": 1, "name": "El Mamon", "email": "elmamon@ignoom.com", "password": "password"},
{"id": 2, "name": "Abuelo", "email": "abuelo@ignoom.com", "password": "password"}];

@Injectable()
export class UserService{
  public current_id = 2; // TODO remove this hardcoded piece
  private _usersUrl = 'http://localhost:1337/user'; // TODO move this to a config file
  constructor(private http: Http){}

  getUsers(){
    return this.http.get(this._usersUrl)
                .map(res => <User[]> res.json()) // encapsulate in data
                .do(data => console.log(data))// eyeball results in the console
                .catch(this.handleError);
  }

  getUser(id: number){
    // get request with authentication
    return this.http.get(this._usersUrl+'/'+id)
      .map( res => <User> res.json())
      .do(data => console.log(data)) // eyeball results in the console
      .catch(this.handleError);
  }

  updateUser(user: User){
    // update request
  }

  authenticateUser(){
    console.log("Authenticating user");
  }

  addUser(user: User): Observable<User>{
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._usersUrl, body, options)
                .map(res => <User> res.json())
                .do(data => console.log(data))
                .catch(this.handleError);
  }

  postRequest(data){
    //var headers = new Headers({'Content-Type': 'application/json'});
    //return this.http.post(this.endpoint, data, {headers: headers} )
    //        .map(res => res.json()).subscribe(data => );
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
