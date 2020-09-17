import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionHeaderComponent } from './conversion-header.component';

describe('ConversionHeaderComponent', () => {
  let component: ConversionHeaderComponent;
  let fixture: ComponentFixture<ConversionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
