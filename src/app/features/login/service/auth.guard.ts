import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    
  //ex.: const haspermission = accountservice.checkpermissions();
  // return haspermission; -- observable<boolean>

  return true;
  //comentario temporario
  /*
    if (localStorage['token'] != null) {
        return true;
    } else {
        this.router.navigate(['/']);
        return false;
    }
  */
  //

    // if (this.authService.isAuthenticated()) {

    //   return true;

    // }else{

    //   this.router.navigate(['/signin']);
    //   return false;

    // }

  }
}
