import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {

  skuForm: FormGroup;
  skuField: FormControl;
  skuNameField: FormControl;

  constructor() {
    this.makeSkuForm();
  }

  ngOnInit() {
  }

  private makeSkuForm() {
    this.skuField = new FormControl('', [Validators.required]);
    this.skuNameField = new FormControl();

    this.skuForm = new FormGroup({
      sku: this.skuField,
      name: this.skuNameField
    });
  }

}
