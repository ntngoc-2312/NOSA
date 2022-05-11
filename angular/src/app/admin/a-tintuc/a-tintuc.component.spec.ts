import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATintucComponent } from './a-tintuc.component';

describe('ATintucComponent', () => {
  let component: ATintucComponent;
  let fixture: ComponentFixture<ATintucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATintucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ATintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
