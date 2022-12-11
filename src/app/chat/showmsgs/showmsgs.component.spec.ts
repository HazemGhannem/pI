import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmsgsComponent } from './showmsgs.component';

describe('ShowmsgsComponent', () => {
  let component: ShowmsgsComponent;
  let fixture: ComponentFixture<ShowmsgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmsgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
