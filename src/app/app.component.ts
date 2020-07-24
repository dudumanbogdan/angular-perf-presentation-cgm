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

  helloItems = [{ title: 'One' }, { title: 'Two' }];

  onClick(): void {
    this.config = {
      ...this.config, position: 'bottom - ' + new Date().toString()
    };
  }

  onClick2(): void {
  }

  add() {
    // this.helloItems.push({title: 'Three' + new Date().toString()});
    this.helloItems = [...this.helloItems, { title: 'Three' }];
  }
}
