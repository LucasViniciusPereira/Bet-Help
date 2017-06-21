import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './../../utils/http.service';

@Injectable()
export class HomeService {

  constructor(private svcHttp: HttpService) { }

}
