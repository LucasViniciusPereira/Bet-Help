import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DisplayValidationService } from '../services/display.validation.service';

@Component({
    selector: 'display-validation',
    template: '<div for="text" data-error="wrong" data-success="right">{{errorMessage}}</div>'
})

export class DisplayValidation {
    @Input() control: FormControl;

    constructor(private svcValidation: DisplayValidationService) { }

    get errorMessage(): string {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                console.log(this.control.errors[propertyName]);

                return this.svcValidation.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }
}