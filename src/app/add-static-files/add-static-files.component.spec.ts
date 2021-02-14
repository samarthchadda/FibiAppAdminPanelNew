import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaticFilesComponent } from './add-static-files.component';

describe('AddStaticFilesComponent', () => {
  let component: AddStaticFilesComponent;
  let fixture: ComponentFixture<AddStaticFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaticFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaticFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
