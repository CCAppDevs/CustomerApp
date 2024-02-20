import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerItemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
