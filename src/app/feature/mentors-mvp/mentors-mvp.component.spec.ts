import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsMvpComponent } from './mentors-mvp.component';

describe('MentorsMvpComponent', () => {
  let component: MentorsMvpComponent;
  let fixture: ComponentFixture<MentorsMvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsMvpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
