import { TestBed } from '@angular/core/testing';

import { BlogfetcherService } from './blogfetcher.service';

describe('BlogfetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogfetcherService = TestBed.get(BlogfetcherService);
    expect(service).toBeTruthy();
  });
});
