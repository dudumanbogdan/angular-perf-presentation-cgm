import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello-counter',
  templateUrl: './hello-counter.component.html',
  styleUrls: ['./hello-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloCounterComponent implements OnInit {
  count = { value: 0};

  ngOnInit(): void {
    setTimeout(() => (this.count = { value: 5 }), 0);
    Promise.resolve().then(() => (this.count = { value: 5 }));
  }

  add() {
    this.count.value++;
  }
}
