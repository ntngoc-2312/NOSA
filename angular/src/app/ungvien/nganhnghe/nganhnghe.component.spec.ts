import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NganhngheComponent } from './nganhnghe.component';

describe('NganhngheComponent', () => {
  let component: NganhngheComponent;
  let fixture: ComponentFixture<NganhngheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NganhngheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NganhngheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
