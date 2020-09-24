import { TestBed } from '@angular/core/testing';

import { ConversionSelectionService } from './conversion-selection.service';

describe('ConversionSelectionService', () => {
  let service: ConversionSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
