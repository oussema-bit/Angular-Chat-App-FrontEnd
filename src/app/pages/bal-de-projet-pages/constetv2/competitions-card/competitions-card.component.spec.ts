import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsCardComponent } from './competitions-card.component';

describe('CompetitionsCardComponent', () => {
  let component: CompetitionsCardComponent;
  let fixture: ComponentFixture<CompetitionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
