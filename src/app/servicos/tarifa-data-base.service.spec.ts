import { TestBed, inject } from '@angular/core/testing';

import { TarifaDataBaseService } from './tarifa-data-base.service';

describe('TarifaDataBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TarifaDataBaseService]
    });
  });

  it('should be created', inject([TarifaDataBaseService], (service: TarifaDataBaseService) => {
    expect(service).toBeTruthy();
  }));
});
