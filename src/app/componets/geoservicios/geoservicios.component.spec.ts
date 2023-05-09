import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoserviciosComponent } from './geoservicios.component';

describe('GeoserviciosComponent', () => {
  let component: GeoserviciosComponent;
  let fixture: ComponentFixture<GeoserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoserviciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
