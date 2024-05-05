import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProjectsComponent } from './show-all-projects.component';

describe('ShowAllProjectsComponent', () => {
  let component: ShowAllProjectsComponent;
  let fixture: ComponentFixture<ShowAllProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
