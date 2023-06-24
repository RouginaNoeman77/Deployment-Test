import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  var authService = inject(AuthService);
  var router = inject(Router);
  if (authService.isAuth$.value.isauth) {
    return true;
  }

  //navigate to login
  router.navigateByUrl('/auth/login');
  return false;
};
