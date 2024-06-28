import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-code',
  templateUrl: './country-code.component.html',
  styleUrls: ['./country-code.component.scss'],
})
export class CountryCodeComponent {
  isCountryCodeRequired = false;
  isCountryCodeInvalid = false;
  countryCodeItemList = [
    {
      phoneCode: 1,
      name: 'United States',
      countryId: 'US',
    },
  ];
  phoneFields!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.phoneFields = this.formBuilder.group({
      countryCode: [''],
    });
  }

  getAllData() {}
}
