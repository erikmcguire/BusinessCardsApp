import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesscardComponent } from './businesscard.component';

describe('BusinesscardComponent', () => {
  let component: BusinesscardComponent;
  let fixture: ComponentFixture<BusinesscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
