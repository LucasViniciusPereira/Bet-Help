import { List } from 'linqts';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { HttpService } from './../../utils/http.service';
import { JogoModel } from './../../shared/models/jogo.model';
import { JogoDetailsModel } from './../../shared/models/jogo.details.model';

@Injectable()
export class HomeService {

  constructor(private svcHttp: HttpService) { }

  getJogosDia(): Observable<List<JogoModel>> {
    const url = 'http://www.mocky.io/v2/594e91ba1100000720d6d3dc';

    return this.svcHttp.get(url);
  }

  getJogo(params): Observable<JogoDetailsModel>{
    // let url = "http://www.mocky.io/v2/59582e981100003f00a6ad56";
    const url = 'http://www.mocky.io/v2/595a74380f00000a039fe423';

    return this.svcHttp.get(url);
  }
}
