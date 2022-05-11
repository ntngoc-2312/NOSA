import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootertComponent } from './footert.component';

describe('FootertComponent', () => {
  let component: FootertComponent;
  let fixture: ComponentFixture<FootertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
