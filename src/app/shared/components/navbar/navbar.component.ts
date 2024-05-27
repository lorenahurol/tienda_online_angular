import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  router = inject(Router);
  usersService = inject(UsersService);

  onClickLogOut() {
    // Borro el token del Local Storage y redirijo:
    localStorage.removeItem("token_tienda");
    this.router.navigateByUrl("/login");
  }

}
