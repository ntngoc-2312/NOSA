import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CttinComponent } from './cttin.component';

describe('CttinComponent', () => {
  let component: CttinComponent;
  let fixture: ComponentFixture<CttinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CttinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CttinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
