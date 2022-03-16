import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsFormContainerComponent } from './mentors-form-container.component';

describe('MentorsFormContainerComponent', () => {
  let component: MentorsFormContainerComponent;
  let fixture: ComponentFixture<MentorsFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
