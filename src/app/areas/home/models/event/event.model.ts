import { Validators, FormBuilder } from '@angular/forms';

export class EventModel {

  // Properites
  TeamPrincipalID = [null, Validators.required];
  TeamVisitorID = [null, Validators.required];

  LstTips = this.fb.array([]);

  constructor(
    private fb: FormBuilder
  ) { };
}
