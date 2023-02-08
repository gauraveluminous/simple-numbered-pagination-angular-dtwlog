import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NumberedPaginationModule } from './shared/modules/numbered-pagination/numbered-pagination.module';

@NgModule({
  imports: [BrowserModule, NumberedPaginationModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
