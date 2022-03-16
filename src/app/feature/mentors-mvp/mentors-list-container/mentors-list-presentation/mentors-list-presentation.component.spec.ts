import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsListPresentationComponent } from './mentors-list-presentation.component';

describe('MentorsListPresentationComponent', () => {
  let component: MentorsListPresentationComponent;
  let fixture: ComponentFixture<MentorsListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
