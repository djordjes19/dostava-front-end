import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMealComponent } from './order-meal.component';

describe('OrderMealComponent', () => {
  let component: OrderMealComponent;
  let fixture: ComponentFixture<OrderMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderMealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
