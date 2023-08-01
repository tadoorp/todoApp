import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LozengeComponent } from './lozenge.component';

describe('LozengeComponent', () => {
  let component: LozengeComponent;
  let fixture: ComponentFixture<LozengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LozengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LozengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
