import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateElementComponent } from './generate-element.component';

describe('GenerateElementComponent', () => {
  let component: GenerateElementComponent;
  let fixture: ComponentFixture<GenerateElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
