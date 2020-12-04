import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  celsiusValue: number = 0;
  fahrenheitValue: number = 0;
  convert() {
    if (this.celsiusValue !== null) {
      this.fahrenheitValue = (this.celsiusValue * 9.0) / 5.0 + 32;
    } else {
      this.fahrenheitValue = 0;
    }
  }
}
