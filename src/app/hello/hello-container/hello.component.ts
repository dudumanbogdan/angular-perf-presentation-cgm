import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get runChangeDetection(): string {
    console.log('Checking the view');
    return 'Always check me!';
  }
}
