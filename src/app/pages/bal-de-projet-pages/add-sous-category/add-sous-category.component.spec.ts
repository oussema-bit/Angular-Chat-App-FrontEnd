import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSousCategoryComponent } from './add-sous-category.component';

describe('AddSousCategoryComponent', () => {
  let component: AddSousCategoryComponent;
  let fixture: ComponentFixture<AddSousCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSousCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSousCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
