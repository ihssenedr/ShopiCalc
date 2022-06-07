import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  groceryList: any [] = [];
  productForm: FormGroup;
  isSubmitted = false;
  constructor(private fromBuilder: FormBuilder) {}
  get errorControl() {
    return this.productForm.controls;
  }
  ngOnInit(): void {
    this.productForm = this.fromBuilder.group({
      name : ['', [Validators.required]],
      price : ['', [Validators.required]]
    });
  }

  addShopItem(item) {
    this.groceryList.push(item);
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.productForm.valid){
      console.log('Please provide all the required values');
      return false;
    }
    const product =  this.productForm.value;
    this.groceryList.push(product);
  }
}
