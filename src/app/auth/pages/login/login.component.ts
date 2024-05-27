import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../../core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin: FormGroup;

  formBuilder = inject(FormBuilder);
  userService = inject(UsersService);
  router = inject(Router);

  constructor() {
    this.formLogin = this.formBuilder.group({
      email: null,
      password: null,
    })
  }

  async onSubmit() {
    try {
      const response = await this.userService.login(this.formLogin.value);
      // Guardar el token en el navegador:
      localStorage.setItem("token_tienda", response.token!);
      alert(response.message);
      this.router.navigateByUrl("/products");
    } catch (err: any) {
      alert(err.error.error)
    }
  }
}
