import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefElementExampleComponent } from './ref-element-example.component';

describe('RefElementExampleComponent', () => {
  let component: RefElementExampleComponent;
  let fixture: ComponentFixture<RefElementExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefElementExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefElementExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
