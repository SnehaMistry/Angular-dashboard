import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentorsFormPresentationComponent } from './mentors-form-presentation.component';



describe('MentorsFormPresentationComponent', () => {
  let component: MentorsFormPresentationComponent;
  let fixture: ComponentFixture<MentorsFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
