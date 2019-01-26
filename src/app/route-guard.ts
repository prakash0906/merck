import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';

import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class RouteGuard implements CanActivate {

  constructor(
  	private myRoute: Router,
  	private loginService: LoginService
  	) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isLoggedIn();
  }
}
