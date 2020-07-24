import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello-list',
  templateUrl: './hello-list.component.html',
  styleUrls: ['./hello-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloListComponent implements OnInit {
  @Input() helloItems;

  constructor() { }

  ngOnInit(): void {
  }


  get runChangeDetection() {
    console.log('HelloList - Checking the view');
    return '';
  }
}
