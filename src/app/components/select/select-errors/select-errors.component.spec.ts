import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectErrorsComponent } from './select-errors.component';

describe('SelectErrorsComponent', () => {
  let component: SelectErrorsComponent;
  let fixture: ComponentFixture<SelectErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
