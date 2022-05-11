import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtietcvComponent } from './ctietcv.component';

describe('CtietcvComponent', () => {
  let component: CtietcvComponent;
  let fixture: ComponentFixture<CtietcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtietcvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtietcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
