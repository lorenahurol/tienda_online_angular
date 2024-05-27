import { Component, EventEmitter, Output, input } from '@angular/core';
import { Product } from '../../../core/models/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  // Signal: nueva herramienta (@INPUT)
  product = input.required<Product>();

  // Output tradicional:
  @Output() productoBorrado: EventEmitter<string> = new EventEmitter();

  onClickBorrar() {
    this.productoBorrado.emit(this.product()._id);

  }

}
