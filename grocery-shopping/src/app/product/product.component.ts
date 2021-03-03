import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    debugger;
    this.productService.getProductList().subscribe(productList => {
      console.log(productList);
      this.productList = productList;
    });
  }

}
