import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuuviecComponent } from './luuviec.component';

describe('LuuviecComponent', () => {
  let component: LuuviecComponent;
  let fixture: ComponentFixture<LuuviecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuuviecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuuviecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
