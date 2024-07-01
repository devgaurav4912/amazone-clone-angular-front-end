import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProductComponent } from './checkout-product.component';

describe('CheckoutProductComponent', () => {
  let component: CheckoutProductComponent;
  let fixture: ComponentFixture<CheckoutProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
