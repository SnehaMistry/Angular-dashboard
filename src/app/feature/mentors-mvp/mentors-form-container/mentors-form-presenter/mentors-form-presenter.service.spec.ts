import { TestBed } from '@angular/core/testing';

import { MentorsFormPresenterService } from './mentors-form-presenter.service';

describe('MentorsFormPresenterService', () => {
  let service: MentorsFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorsFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
