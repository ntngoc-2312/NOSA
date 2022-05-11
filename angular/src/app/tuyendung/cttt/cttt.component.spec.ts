import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtttComponent } from './cttt.component';

describe('CtttComponent', () => {
  let component: CtttComponent;
  let fixture: ComponentFixture<CtttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
