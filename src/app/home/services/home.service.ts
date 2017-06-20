import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { UserModel } from '../class/user.model';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

/** @description Retorna o usuario MOCK.  
 * @return {UserModel} 
 */  
  public getAuthUser(): Observable<UserModel[]> {
    let url = "http://www.mocky.io/v2/5946c6051000007f0ff64eee";

    return this.http
      .get(url)
      .map((response: Response) =>
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
