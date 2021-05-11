import { TestBed } from '@angular/core/testing';

import { HistoricServiceService } from './historic-service.service';

describe('HistoricServiceService', () => {
  let service: HistoricServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
