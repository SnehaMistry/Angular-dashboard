import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsListContainerComponent } from './mentors-list-container.component';

describe('MentorsListContainerComponent', () => {
  let component: MentorsListContainerComponent;
  let fixture: ComponentFixture<MentorsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
