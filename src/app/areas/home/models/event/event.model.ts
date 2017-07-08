import { Validators, FormControl } from '@angular/forms';

export class EventModel {

  // Properites
  TeamPrincipalID = [null, Validators.required];
  TeamVisitorID = [null, Validators.required];

  LstTips: Array<any> = [null, Validators.required];

  constructor(
  ) { };
}
