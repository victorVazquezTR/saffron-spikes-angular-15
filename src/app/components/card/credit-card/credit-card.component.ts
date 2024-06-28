import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent {
  cardFields!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cardFields = this.formBuilder.group({
      currentCreditCard: [''],
    });
  }
}
