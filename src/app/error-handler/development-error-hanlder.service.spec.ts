import { TestBed } from '@angular/core/testing';

import { DevelopmentErrorHanlderService } from './development-error-hanlder.service';

describe('DevelopmentErrorHanlderService', () => {
  let service: DevelopmentErrorHanlderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopmentErrorHanlderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
