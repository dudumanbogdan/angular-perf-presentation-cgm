import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-workshop-cgm';
  config = {
    position: 'top'
  };

  onClick(): void {
    this.config = {
      ...this.config, position: 'bottom - ' + new Date().toString()
    };
  }
}
