import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationBlockComponent } from './customization-block.component';

describe('EditingBlockComponent', () => {
  let component: CustomizationBlockComponent;
  let fixture: ComponentFixture<CustomizationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizationBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
