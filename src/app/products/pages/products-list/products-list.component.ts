import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from '../../../core/models/product.interface';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  arrProducts: Product[] = [];

  productsService = inject(ProductsService);

  async ngOnInit() {
    const response = await this.productsService.getAll()
    this.arrProducts = response;
  }

  async onProductoBorrado($event: string) {
    // Borro el producto de la BD:
    await this.productsService.deleteById($event);

    // Recupero el resto de los productos:
    const response = await this.productsService.getAll();
    console.log(response);
  }

}
