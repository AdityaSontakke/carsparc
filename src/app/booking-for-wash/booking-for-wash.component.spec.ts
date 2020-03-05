import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingForWashComponent } from './booking-for-wash.component';

describe('BookingForWashComponent', () => {
  let component: BookingForWashComponent;
  let fixture: ComponentFixture<BookingForWashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingForWashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingForWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
