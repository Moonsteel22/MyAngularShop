import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserauthorizationComponent } from './userauthorization.component';

describe('UserauthorizationComponent', () => {
  let component: UserauthorizationComponent;
  let fixture: ComponentFixture<UserauthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserauthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserauthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
