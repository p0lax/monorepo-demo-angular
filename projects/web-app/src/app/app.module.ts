import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibModule } from 'lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
