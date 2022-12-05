import { TestBed } from '@angular/core/testing';

import { UserpassgarudGuard } from './userpassgarud.guard';

describe('UserpassgarudGuard', () => {
  let guard: UserpassgarudGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserpassgarudGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
