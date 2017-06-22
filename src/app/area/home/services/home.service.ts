import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './../../../utils/http.service';

@Injectable()
export class HomeService {

  constructor(private svcHttp: HttpService) { }

  getTeste(): Observable<any> {
    let url = "http://www.mocky.io/v2/5946c6051000007f0ff64eee";

    return this.svcHttp.get(url);
  };

}
