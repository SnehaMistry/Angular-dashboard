import { TestBed } from '@angular/core/testing';

import { SearchHeaderPresenterService } from './search-header-presenter.service';

describe('SearchHeaderPresenterService', () => {
  let service: SearchHeaderPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchHeaderPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
