import { TestBed } from '@angular/core/testing';

import { ProductionErrorHanlderService } from './production-error-hanlder.service';

describe('ProductionErrorHanlderService', () => {
  let service: ProductionErrorHanlderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionErrorHanlderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
