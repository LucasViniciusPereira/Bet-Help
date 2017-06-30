import { List } from 'linqts';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { HttpService } from './../../utils/http.service';
import { JogoModel } from './../../shared/models/jogo.model';

@Injectable()
export class HomeService {

  constructor(private svcHttp: HttpService) { }

  getJogosDia(): Observable<List<JogoModel>> {
    let url = "http://www.mocky.io/v2/594e91ba1100000720d6d3dc";

    return this.svcHttp.get(url);
  }
}
