import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello-config',
  templateUrl: './hello-config.component.html',
  styleUrls: ['./hello-config.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloConfigComponent implements OnInit {

  @Input() config;

  constructor() { }

  ngOnInit(): void {
  }


  get runChangeDetection(): string {
    console.log('Checking the view - hello-config');
    return 'Checking the view - hello-config';
  }
}
