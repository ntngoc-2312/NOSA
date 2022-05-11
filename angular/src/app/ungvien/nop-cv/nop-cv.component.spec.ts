import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopCVComponent } from './nop-cv.component';

describe('NopCVComponent', () => {
  let component: NopCVComponent;
  let fixture: ComponentFixture<NopCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
