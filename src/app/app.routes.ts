import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: "",
        // Cargar elementos solo cuando sea necesario.
        // nada/login se activa el comp login...
        loadChildren: () => import("./auth/auth.routes").then(m => m.AUTH_ROUTES)
    }, 
    {
        path: "products",
        loadChildren: () => import("./products/products.routes").then(m => m.PRODUCTS_ROUTES),
        // Llamar al tipo de guard y lo que se va a aplicar:
        canActivate: [authGuard]
    }
];
