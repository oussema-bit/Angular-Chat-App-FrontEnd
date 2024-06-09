import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailsFormComponent } from './video-details-form.component';

describe('VideoDetailsFormComponent', () => {
  let component: VideoDetailsFormComponent;
  let fixture: ComponentFixture<VideoDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
