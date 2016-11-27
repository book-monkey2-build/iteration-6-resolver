import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookStoreService } from './shared/book-store.service';
import { AppRoutingModule } from './app-routing.module';
import { BookResolver } from './shared/book-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    BookStoreService,
    BookResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
