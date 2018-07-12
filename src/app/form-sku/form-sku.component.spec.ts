import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormSkuComponent } from './form-sku.component';

describe('FormSkuComponent', () => {
  let component: FormSkuComponent;
  let fixture: ComponentFixture<FormSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ FormSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create skuForm', () => {
    expect(component.skuForm).toBeTruthy();
  });

  it('should create skuForm', () => {
    expect(component.skuField).toBeTruthy();
  });

  it('should create skuForm', () => {
    expect(component.skuNameField).toBeTruthy();
  });

  describe('Test for skuField', () => {

    it('shouldn\'t throw an error: required', () => {
      component.skuField.setValue('abc321');
      expect(component.skuField.valid).toBeTruthy();
    });

    it('should throw an error: required', () => {
      component.skuField.setValue('');
      expect(component.skuField.invalid).toBeTruthy();
    });

  });
});
