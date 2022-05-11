import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioithieutComponent } from './gioithieut.component';

describe('GioithieutComponent', () => {
  let component: GioithieutComponent;
  let fixture: ComponentFixture<GioithieutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GioithieutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GioithieutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
