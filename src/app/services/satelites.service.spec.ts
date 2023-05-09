import { TestBed } from '@angular/core/testing';

import { SatelitesService } from './satelites.service';

describe('SatelitesService', () => {
  let service: SatelitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatelitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
