import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjectDetailsComponent } from './show-project-details.component';

describe('ShowProjectDetailsComponent', () => {
  let component: ShowProjectDetailsComponent;
  let fixture: ComponentFixture<ShowProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProjectDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
