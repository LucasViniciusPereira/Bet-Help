import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { UserModel } from './class/user.model';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  getAuthUser(): Observable<UserModel[]> {
    let url = "http://www.mocky.io/v2/59456971130000ff0d5b6fa3";

    return this.http
      .get(url)
      .map((response: Response) =>
        //console.log(response.json())
        <UserModel>response.json()
        ) 
      //.do(data => console.log(data))
      .catch(this.handleError);
  };

  private handleError(error:Response){
    let message = `Error status ${ error.status } na url: ${ error.url }`;
    return Observable.throw(message); 
  };
}
