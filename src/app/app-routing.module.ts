import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Dashboard.component';
import { CreditCardComponent } from './components/card/credit-card/credit-card.component';
import { CountryCodeComponent } from './components/combobox/country-code/country-code.component';
import { SelectErrorsComponent } from './components/select/select-errors/select-errors.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'card/credit-card', component: CreditCardComponent },
  { path: 'combobox/country-code', component: CountryCodeComponent },
  { path: 'select/wijmo-error', component: SelectErrorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
