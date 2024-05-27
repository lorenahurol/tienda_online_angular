import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  // Sacar el token de local storage:
  const token = localStorage.getItem("token_tienda");

  

  if (token) {
    return true;
  } else {
    alert("Necesitas estar autenticado");
    router.navigateByUrl("/login");
    return false;
  }
};
