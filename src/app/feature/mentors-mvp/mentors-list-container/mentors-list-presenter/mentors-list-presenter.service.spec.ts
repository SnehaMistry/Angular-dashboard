import { TestBed } from '@angular/core/testing';

import { MentorsListPresenterService } from './mentors-list-presenter.service';

describe('MentorsListPresenterService', () => {
  let service: MentorsListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorsListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
