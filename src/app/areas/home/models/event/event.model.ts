import { Validators, FormControl, FormArray, FormBuilder } from '@angular/forms';

export class EventModel {

  // Properites
  TeamPrincipalID = [null, Validators.required];
  TeamVisitorID = [null, Validators.required];

<<<<<<< HEAD
  LstTips = new Array<any>();

  constructor(
    // private fb: FormBuilder
=======
  LstTips = this.fb.array([]);

  constructor(
    private fb: FormBuilder
>>>>>>> 0c2103b9a049850d01623d00cecd79298265f229
  ) { };
}
