import { TestBed } from '@angular/core/testing';

import { HtmlFetcherService } from './html-fetcher.service';

describe('HtmlFetcherService', () => {
  let service: HtmlFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
