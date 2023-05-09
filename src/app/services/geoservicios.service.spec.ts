import { TestBed } from '@angular/core/testing';

import { GeoserviciosService } from './geoservicios.service';

describe('GeoserviciosService', () => {
  let service: GeoserviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoserviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
