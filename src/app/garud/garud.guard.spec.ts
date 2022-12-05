import { TestBed } from '@angular/core/testing';

import { GarudGuard } from './garud.guard';

describe('GarudGuard', () => {
  let guard: GarudGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GarudGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
