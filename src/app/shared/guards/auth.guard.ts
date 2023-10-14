import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem("auth")){
    return true;
  }
  alert('You must login to view the cart')
  return false;
};
