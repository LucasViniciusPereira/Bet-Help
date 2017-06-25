// import { Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

// export class FormLoginModel extends FormGroup {

//     email: FormControl;
//     password: FormControl;

//     constructor() {
//         super(null);
        
//         this.email.setValidators([Validators.required, Validators.email]);
//         this.password.setValidators([Validators.required, Validators.minLength(4)]);
//     }
// }

// import { Input, Component } from '@angular/core';
// @Component({
//   selector: 'ngbd-alert-closeable',
// })
// export class NgbdAlertCloseable {
//   @Input()
//   public alerts: Array<IAlert> = [];
//   private index: number; 

//   constructor() {
//     this.index = 1;
//   }

//   public static addSuccess(alert: IAlert) {
//     this.index += 1;
//   }
// }

// import { EventEmitter, Output, Component } from '@angular/core';
// import { NgbdAlertCloseable } from './ngbd-alert-closeable.component';

// @Component({
//   selector: 'alert-ctrl',
//   template: '<button class="btn btn-success" (click)="addSuccessMsg()">Add</button>'
// })

// export class AlertCtrl {
//     @Output() msgEvent = new EventEmitter(); 
//     public addSuccessMsg(){
//         this.msgEvent.emit(null);
//     }
// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   template: '<div class="col-sm-4"><alert-ctrl (msgEvent)="ngbdalertcloseable.addSuccess()"></alert-ctrl><ngbd-alert-closeable #ngbdalertcloseable></ngbd-alert-closeable>'
// })

// export class AppComponent { }