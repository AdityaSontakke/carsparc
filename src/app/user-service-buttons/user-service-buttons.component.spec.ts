import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServiceButtonsComponent } from './user-service-buttons.component';

describe('UserServiceButtonsComponent', () => {
  let component: UserServiceButtonsComponent;
  let fixture: ComponentFixture<UserServiceButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserServiceButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserServiceButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
