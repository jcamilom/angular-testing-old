import { MyValidators } from './validators';
import { FormControl } from '@angular/forms';

describe('Test for validators', () => {

  describe('Test for skuValidate', () => {

    it('should return null for \'1234\'', () => {
      const formControl = new FormControl();
      formControl.setValue('1234');
      const rta = MyValidators.skuValidate(formControl);
      expect(rta).toBeNull();
    });

    it('should return null form \'\'', () => {
      const formControl = new FormControl();
      formControl.setValue('');
      const rta = MyValidators.skuValidate(formControl);
      expect(rta).toBeNull();
    });

    it('should return an error for \'541234\'', () => {
      const formControl = new FormControl();
      formControl.setValue('541234');
      const rta = MyValidators.skuValidate(formControl);
      expect(rta.invalidSku).toBeTruthy();
    });

  });

});
