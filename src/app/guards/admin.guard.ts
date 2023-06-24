import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      var authService = inject(AuthService);
      var router = inject(Router);
      if (authService.isAuth$.value.role === "Admin") { //check kelmet admin
        return true;
      }
      if (authService.isAuth$.value.isauth) { //check kelmet admin
        router.navigateByUrl('/home'); //zabat al navigation beta3et al home 
      return false;
      }
      //navigate to login
      router.navigateByUrl('/auth/login');
      return false;
  }
}
