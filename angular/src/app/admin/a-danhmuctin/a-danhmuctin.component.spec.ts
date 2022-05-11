import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADanhmuctinComponent } from './a-danhmuctin.component';

describe('ADanhmuctinComponent', () => {
  let component: ADanhmuctinComponent;
  let fixture: ComponentFixture<ADanhmuctinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADanhmuctinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADanhmuctinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
