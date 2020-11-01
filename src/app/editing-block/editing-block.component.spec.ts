import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingBlockComponent } from './editing-block.component';

describe('EditingBlockComponent', () => {
  let component: EditingBlockComponent;
  let fixture: ComponentFixture<EditingBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
