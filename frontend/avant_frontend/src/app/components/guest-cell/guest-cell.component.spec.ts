import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCellComponent } from './guest-cell.component';

describe('GuestCellComponent', () => {
  let component: GuestCellComponent;
  let fixture: ComponentFixture<GuestCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
