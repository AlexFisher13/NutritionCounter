import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserResultComponent } from './user-result/user-result.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
