import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopFormPage } from './shop-form.page';

describe('ShopFormPage', () => {
  let component: ShopFormPage;
  let fixture: ComponentFixture<ShopFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
