import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../../core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formRegister: FormGroup;
  

  formBuilder = inject(FormBuilder)
  userService = inject(UsersService)
  router = inject(Router);


  constructor() {
    this.formRegister = this.formBuilder.group({
      name: [null, Validators.required],
      email: null,
      password: null,
      role: null
    })
  }

  async onSubmit() {
    const response = await this.userService.register(this.formRegister.value);
    if (response.length > 0) {
      alert(response.join("\n"))
    } else {
      // Navega internamente al login:
      alert("Registro OK");
      this.router.navigateByUrl("/login");
      
    }
  }
}