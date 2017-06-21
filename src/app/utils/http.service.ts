import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { PreloaderService } from './../shared/components/preloader/preloader.service';

@Injectable()
export class HttpService {

    constructor(
        private http: Http,
        private svcPreloader: PreloaderService
    ) { }

    get(url: string, params?: RequestOptionsArgs): Observable<any> {

        this.onStart();

        return this.http.get(url, params)
            .catch(this.callbackException)
            .delay(5000)
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
        this.svcPreloader.hide();
    }

    private onStart() {
        this.svcPreloader.show();
    }
}