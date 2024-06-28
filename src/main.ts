import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  SafBadge,
  SafButton,
  SafCard,
  SafCombobox,
  SafListboxOption,
  SafRadioGroup,
  SafRadio,
  SafSelect,
} from '@saffron/core-components';

SafButton();
SafBadge();
SafCard();
SafCombobox();
SafListboxOption();
SafRadioGroup();
SafRadio();
SafSelect();

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
