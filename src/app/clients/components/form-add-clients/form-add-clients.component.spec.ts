import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddClientsComponent } from './form-add-clients.component';

describe('FormAddClientsComponent', () => {
  let component: FormAddClientsComponent;
  let fixture: ComponentFixture<FormAddClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
