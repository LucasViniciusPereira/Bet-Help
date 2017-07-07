import { List } from 'linqts';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { HttpService } from './../../utils/http.service';
import { GameModel } from './../../shared/models/game/game.model';
import { TipListModel } from './models/tip/tip.list.model';

@Injectable()
export class HomeService {

  constructor(private svcHttp: HttpService) { }

  getGamesOfDays(): Observable<Array<GameModel>> {
    const url = 'http://www.mocky.io/v2/595ed4690f000059000eaaf6';

    return this.svcHttp.get(url);
  }

  getGame(params): Observable<TipListModel> {
    const url = 'http://www.mocky.io/v2/595edc380f00004d000eaafb';
    // const url = 'http://www.mocky.io/v2/595a74380f00000a039fe423';

    return this.svcHttp.get(url);
  }
}
