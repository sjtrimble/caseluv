import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSelectComponent } from './phone-select.component';

describe('PhoneSelectComponent', () => {
  let component: PhoneSelectComponent;
  let fixture: ComponentFixture<PhoneSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
