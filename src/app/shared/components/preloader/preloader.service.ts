import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PreloaderService {

    loaderSubject = new EventEmitter<boolean>();

    constructor() { }

    show() {
        this.loaderSubject.emit(true);
    }

    hide() {
        this.loaderSubject.emit(false);
    }
}