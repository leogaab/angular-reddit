import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddLinkFormComponent } from './components/add-link-form/add-link-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddLinkFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
