import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetsHomeComponent } from './gadgets-home.component';

describe('GadgetsHomeComponent', () => {
  let component: GadgetsHomeComponent;
  let fixture: ComponentFixture<GadgetsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadgetsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
