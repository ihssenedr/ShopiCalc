import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  groceryList: any [] = [];
  constructor() { }

  getShopItems(): any {
    const productSObservale = new Observable(obs =>{
      obs.next(this.groceryList);
    });
    return productSObservale;
  }
  addShopItem(item) {
    this.groceryList.push(item);
  }
}
