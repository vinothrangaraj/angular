import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product } from '../model/product';
import { MOCKDATA } from '../MockData/productListMock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList():Observable<product[]>{
   // const url = ''
    //return this.http.get<product[]>(url);
    return of(MOCKDATA);
  }
}
