import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <ul>
      <li>
        <a routerLink="/card/credit-card">Card for credit card payments</a>
      </li>
      <li>
        <a routerLink="/combobox/country-code">Combobox for Country Code</a>
      </li>
      <li>
        <a routerLink="/select/wijmo-error">Select for Wijmo Errors</a>
      </li>
    </ul>
  `,
})
export class DashboardComponent {}
