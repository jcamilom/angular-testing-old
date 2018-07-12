import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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

    it('shouldn\'t throw an error: required / invalidSku', () => {
      component.skuField.setValue('123444321');
      expect(component.skuField.valid).toBeTruthy();
    });

    it('should throw an error: required', () => {
      component.skuField.setValue('');
      expect(component.skuField.invalid).toBeTruthy();
      expect(component.skuField.getError('required')).toBeTruthy();
    });

    it('should throw an error: invalidSku', () => {
      component.skuField.setValue('g11f');
      expect(component.skuField.invalid).toBeTruthy();
      expect(component.skuField.getError('invalidSku')).toBeTruthy();
    });

    it('should show an error in the template: invalidSku', async(() => {
      // Arrange
      const input = fixture.debugElement.query(By.css('input#skuInput')).nativeElement;
      // Act
      input.value = '987654';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable()
        .then(() => {
          // Assert
          const msgs = fixture.nativeElement.querySelectorAll('.ui.message');
          expect(msgs.length).toEqual(1);
          expect(msgs[0].innerHTML).toContain('SKU is invalid');
        });
    }));

    it('should show an error in the template: required', async(() => {
      // Arrange
      const input = fixture.debugElement.query(By.css('input#skuInput')).nativeElement;
      // Act
      input.value = '';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable()
        .then(() => {
          // Assert
          const msgs = fixture.nativeElement.querySelectorAll('.ui.message');
          expect(msgs.length).toEqual(1);
          expect(msgs[0].innerHTML).toContain('SKU is required');
        });
    }));

  });
});
