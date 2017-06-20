import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

import { GlobalService } from './../utils/global.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private svcGlobal: GlobalService,
        private router: Router
    ) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        return this.verificarAcesso();
    }

    private verificarAcesso() {
        if (this.svcGlobal.UserIsAuthenticate)
            return true;

        this.router.navigate(['/login']);
        return false;
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canLoad: verificando se usuário pode carregar o cod módulo');
        return this.verificarAcesso();
    }

}