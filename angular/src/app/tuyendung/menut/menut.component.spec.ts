import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutComponent } from './menut.component';

describe('MenutComponent', () => {
  let component: MenutComponent;
  let fixture: ComponentFixture<MenutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
