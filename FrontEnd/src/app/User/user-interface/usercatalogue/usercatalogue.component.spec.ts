import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercatalogueComponent } from './usercatalogue.component';

describe('UsercatalogueComponent', () => {
  let component: UsercatalogueComponent;
  let fixture: ComponentFixture<UsercatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
