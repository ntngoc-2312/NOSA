import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangtuyenComponent } from './dangtuyen.component';

describe('DangtuyenComponent', () => {
  let component: DangtuyenComponent;
  let fixture: ComponentFixture<DangtuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangtuyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangtuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
