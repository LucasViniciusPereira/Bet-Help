import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ControlMessageService } from '../services/control.message.service';

@Component({
    selector: 'control-messages',
    //template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
    template : '<div for="text" data-error="wrong" data-success="right">{{errorMessage}}</div>'
})

export class ControlMessage {
    @Input() control: FormControl;

    constructor() { }

    get errorMessage(): string {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ControlMessageService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }
}