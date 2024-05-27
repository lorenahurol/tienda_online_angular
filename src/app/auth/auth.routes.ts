import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

// Rutas de autenticacion.
export const AUTH_ROUTES: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent }
];