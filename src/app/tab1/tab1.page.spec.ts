import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1Page } from './tab1.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {ProductService} from '../services/product.service';
import {Observable, of} from 'rxjs';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let service;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, ReactiveFormsModule, FormsModule],
      providers: [ProductService]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    component.ngOnInit();
    service = TestBed.get(ProductService);
  }));
  it('Form invalid when empty',  ()=> {
    expect(component.productForm.value.valid).toBeFalsy();
  });

  it('name field validity',  () => {
    const name = component.productForm.controls.name;
    expect(name.valid).toBeFalsy();
  });
  it('should submit form',  () => {
    expect(component.productForm.valid).toBeFalsy();
    component.productForm.controls.name.setValue('water');
    component.productForm.controls.price.setValue(15);

    expect(component.productForm.valid).toBeTruthy();
  });
  it('should save product details when form is submitted',async () => {
    component.isSubmitted = true;
    component.productForm.controls.name.setValue('water');
    component.productForm.controls.price.setValue(15);
    const spy = spyOn(service , 'addShopItem').and.returnValue(of());
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  });
});
