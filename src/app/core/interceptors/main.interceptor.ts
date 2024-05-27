import { HttpInterceptorFn } from '@angular/common/http';

export const mainInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem("token_tienda");

  if (token) {
    // Clonar la peticion:
    req = req.clone({
      setHeaders: {
        "Authorization": token
      }
    })
  }

  return next(req);
};
