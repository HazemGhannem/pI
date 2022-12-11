import { TestBed } from '@angular/core/testing';

import { NotuserGuard } from './notuser.guard';

describe('NotuserGuard', () => {
  let guard: NotuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
