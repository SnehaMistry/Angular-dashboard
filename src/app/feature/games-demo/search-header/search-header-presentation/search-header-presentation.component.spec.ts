import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeaderPresentationComponent } from './search-header-presentation.component';

describe('SearchHeaderPresentationComponent', () => {
  let component: SearchHeaderPresentationComponent;
  let fixture: ComponentFixture<SearchHeaderPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHeaderPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeaderPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
