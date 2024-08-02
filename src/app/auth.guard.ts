import { CanActivateFn, Router } from '@angular/router';
import { RouteCheckService } from './modules/admin/route-check.service';
import { inject } from '@angular/core';
import { ToastService } from './modules/admin/toast.service';

export const authGuard: CanActivateFn = (route, state) => {

  

  const authServices = inject(RouteCheckService,)
  const toast = inject(ToastService)
  const rout = inject(Router)


  if (authServices.isLoggedIn()) {
    return true

  }
  else {

    toast.showWarning("Please login...")
    rout.navigateByUrl("")
    return false;
  }

};
