import { TestBed } from '@angular/core/testing';

import { UsergarudGuard } from './usergarud.guard';

describe('UsergarudGuard', () => {
  let guard: UsergarudGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsergarudGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
