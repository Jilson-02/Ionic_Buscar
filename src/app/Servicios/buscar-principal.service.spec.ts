import { TestBed } from '@angular/core/testing';

import { BuscarPrincipalService } from './buscar-principal.service';

describe('BuscarPrincipalService', () => {
  let service: BuscarPrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarPrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
