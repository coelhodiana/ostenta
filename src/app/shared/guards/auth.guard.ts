import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private auth: AuthService, private router: Router) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
  if(this.auth.isAuthenticated()) {
    return true;
  } else {
    this.router.navigate(['/'])
    return false;
  }
}
};
