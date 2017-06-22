import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as jQuery from 'jquery';

@Injectable()
export class PreloaderService {

    loaderSubject = new EventEmitter<boolean>();

    constructor() { }

    show() {
        jQuery("div#main-app").fadeOut();
        this.loaderSubject.emit(true);
    }

    hide() {
        this.loaderSubject.emit(false);
        jQuery("div#main-app").fadeIn("slow");
    }
}