import { TestBed } from '@angular/core/testing';

import { MovieHelperService } from './movie-helper.service';

describe('MovieHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieHelperService = TestBed.get(MovieHelperService);
    expect(service).toBeTruthy();
  });
});
