import { TestBed } from '@angular/core/testing';

import { HomePresenterService } from './home-presenter.service';

describe('HomePresenterService', () => {
  let service: HomePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
