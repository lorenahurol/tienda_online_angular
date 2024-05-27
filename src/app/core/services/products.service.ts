import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product } from '../models/product.interface';

type NewProductBody = { name: string, description: string, price: number, stock: number, department: string, available: boolean }

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = `${environment.apiUrl}/products`;

  private httpClient = inject(HttpClient);

  getAll() {
    return firstValueFrom(
      this.httpClient.get<Product[]>(this.baseUrl)
    )
  }

  create(body: NewProductBody) {
    return firstValueFrom(
      this.httpClient.post<Product>(this.baseUrl, body)
    )
  }

  /*
  createHeaders() {
    return {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem("token_tienda")!
      })
    }
  } */

  deleteById(product_id: string) {
    return firstValueFrom(
      this.httpClient.delete(`${this.baseUrl}/${product_id}`)
    )

  }
}
