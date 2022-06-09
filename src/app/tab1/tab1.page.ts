import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  groceryList: any [] = [];
  productForm: FormGroup;
  isSubmitted = false;
  total = 0;
  constructor(private fromBuilder?: FormBuilder,
              private productService?: ProductService) {}
  get errorControl() {
    return this.productForm.controls;
  }
  ngOnInit(): void {
    const $productSObservable = this.productService.getShopItems();
    $productSObservable.subscribe((productList: any[]) => {
      this.groceryList = productList;
    });
    this.productForm = this.fromBuilder.group({
      name : ['', [Validators.required]],
      price : ['', [Validators.required]]
    });
  }

  addShopItem(item) {
    this.total = this.total + Number(item.price) ;
    this.productService.addShopItem(item);
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.productForm.valid){
      console.log('Please provide all the required values');
      return false;
    }
    this.addShopItem(this.productForm.value);
    this.productForm.reset();
  }
}
