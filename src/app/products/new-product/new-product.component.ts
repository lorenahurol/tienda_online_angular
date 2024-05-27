import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../core/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

  newProdForm: FormGroup;

  formBuilder = inject(FormBuilder);
  productsService = inject(ProductsService);
  router = inject(Router);

  constructor() {
    this.newProdForm = this.formBuilder.group({
      name: null,
      description: null, 
      price: null,
      stock: null,
      department: null,
      available: null
    })
  }

  async onSubmit() {
    try {
      const response = await this.productsService.create(this.newProdForm.value);
      alert("Nuevo producto creado");
      this.router.navigateByUrl("/products");
    } catch (error) {
      alert("Revisa el formulario")
    }
  }
}
