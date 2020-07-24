import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello-item',
  templateUrl: './hello-item.component.html',
  styleUrls: ['./hello-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }


  get runChangeDetection() {
    console.log('HelloItemComponent - Checking the view');
    return '';
  }

}
