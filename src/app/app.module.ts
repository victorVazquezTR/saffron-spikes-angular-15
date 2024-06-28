import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './components/card/credit-card/credit-card.component';
import { DashboardComponent } from './Dashboard.component';
import { CountryCodeComponent } from './components/combobox/country-code/country-code.component';
import { SelectErrorsComponent } from './components/select/select-errors/select-errors.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    DashboardComponent,
    CreditCardComponent,
    CountryCodeComponent,
    SelectErrorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
