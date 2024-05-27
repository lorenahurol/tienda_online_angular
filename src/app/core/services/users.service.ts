import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user.interface';

// Crear tipo propio:
type RegisterBody = { name: string, email: string, password: string, role: string }
type LoginBody = { email: string, password: string };
type LoginResponse = { error?: string, message?: string, token?: string };

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Todas las peticiones a users, parten de la url base:
  private baseUrl: string = `${environment.apiUrl}/users`;

  private httpClient = inject(HttpClient);

  register(newUser: RegisterBody): Promise<User & Array <string>> {
    return firstValueFrom(
      this.httpClient.post<User & Array <string>>(`${this.baseUrl}/register`, newUser)
    );
  }

  login(body: LoginBody): Promise<LoginResponse> {
    return firstValueFrom(
      this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`, body)
    )
  }

  isLogged() {
    return localStorage.getItem("token_tienda") ? true : false;
  }
}
