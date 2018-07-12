import { FormControl } from '@angular/forms';

export class MyValidators {

  static skuValidate(control: FormControl) {
    const value = control.value;
    if(value.match(/^123/) || value === '') {
      return null;
    } else {
      return {invalidSku: true};
    }
  }

}
