import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloonServicesComponent } from './saloon-services.component';

describe('SaloonServicesComponent', () => {
  let component: SaloonServicesComponent;
  let fixture: ComponentFixture<SaloonServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaloonServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaloonServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
