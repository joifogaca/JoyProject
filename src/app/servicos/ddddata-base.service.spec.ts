import { TestBed, inject } from '@angular/core/testing';

import { DdddataBaseService } from './ddddata-base.service';

describe('DdddataBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DdddataBaseService]
    });
  });

  it('should be created', inject([DdddataBaseService], (service: DdddataBaseService) => {
    expect(service).toBeTruthy();
  }));
});
