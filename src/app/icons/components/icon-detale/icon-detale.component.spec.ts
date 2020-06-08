import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDetaleComponent } from './icon-detale.component';

describe('IconDetaleComponent', () => {
  let component: IconDetaleComponent;
  let fixture: ComponentFixture<IconDetaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDetaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDetaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
