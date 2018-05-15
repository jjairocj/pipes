import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import localEs from '@angular/common/locales/es';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
   ],
  bootstrap: [ AppComponent ]
 })
 export class AppModule { }
