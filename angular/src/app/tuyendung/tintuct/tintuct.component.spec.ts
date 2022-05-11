import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TintuctComponent } from './tintuct.component';

describe('TintuctComponent', () => {
  let component: TintuctComponent;
  let fixture: ComponentFixture<TintuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TintuctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TintuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
