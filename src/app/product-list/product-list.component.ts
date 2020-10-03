import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  getClass(date: Date): Object {
    const timeDifference: number = date.getTime() - new Date().getTime();
    const hoursDifference: number = Math.floor(timeDifference / (1000 * 60 * 60));

    return {
      'expaired': hoursDifference < 0,
      'almost-expaired': hoursDifference < 24 && hoursDifference > 0
    }
  }
}
