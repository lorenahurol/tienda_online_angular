import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { mainInterceptor } from './core/interceptors/main.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    // Traer HttpClient:
    provideHttpClient(
      // Interceptors: Todos los interceptors que vamos a aplicar:
      withInterceptors([mainInterceptor])
    )
  ]
};
