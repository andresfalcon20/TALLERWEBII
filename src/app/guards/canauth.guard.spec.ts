import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canauthGuard } from './canauth.guard';

describe('canauthGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
