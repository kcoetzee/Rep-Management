import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactList } from './contact/contact-list.component';
import { ContactRowCheckboxComponent } from './contact/contact-row-checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ContactList,
    ContactRowCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
