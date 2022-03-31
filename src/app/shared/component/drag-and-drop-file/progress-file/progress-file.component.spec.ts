import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressFileComponent } from './progress-file.component';

describe('ProgressFileComponent', () => {
  let component: ProgressFileComponent;
  let fixture: ComponentFixture<ProgressFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});