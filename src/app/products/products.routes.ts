import { Routes } from "@angular/router";
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { NewProductComponent } from "./new-product/new-product.component";

// Array de rutas: Toda la gestion de rutas de products va a estar aqui:
export const PRODUCTS_ROUTES: Routes = [
    // Todas las rutas tienen por delante /products:
    { path: '', component: ProductsListComponent },
    { path: "new", component: NewProductComponent }

];