import { TestBed } from '@angular/core/testing';

import { OneShopFormService } from './one-shop-form.service';

describe('OneShopFormService', () => {
  let service: OneShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
