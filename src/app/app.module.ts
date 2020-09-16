import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminuserModule } from './admin/adminuser/adminuser.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminuserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
