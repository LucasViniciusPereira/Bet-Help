import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor(
        private http: Http
    ) { }

    get(url: string, params?: RequestOptionsArgs): Observable<any> {

        this.onStart();

        return this.http.get(url, params)
            .catch(this.callbackException)
            .map((response: Response) =>
                <any>response.json())
            .do((res: Response) => {

            }, (error: any) => {
                this.callbackError(error);
            }).finally(() => {
                this.onStop();
            });
    }

    private callbackException(): Observable<any> {
        return;
    }

    private callbackError(error: any): void {
        console.log('Error');
        //   private handleError(error:Response){
        //     let message = `Error status ${ error.status } na url: ${ error.url }`;
        //     return Observable.throw(message); 
        //   };
        return;
    }

    private onStop() {
        console.log('Stop');
        return;
    }

    private onStart() {
        console.log('Start');
        return;
    }
}