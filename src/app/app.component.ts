import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  page = 1;

  pageEvent(pageNumber: number): void {
    this.page = pageNumber;
  }
}
