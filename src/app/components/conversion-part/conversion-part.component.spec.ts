import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionPartComponent } from './conversion-part.component';

describe('ConversionPartComponent', () => {
  let component: ConversionPartComponent;
  let fixture: ComponentFixture<ConversionPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
