import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hello-counter',
  templateUrl: './hello-counter.component.html',
  styleUrls: ['./hello-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloCounterComponent implements OnInit {
  count = { value: 0 };

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.count = { value: 5 };
      this.cdr.detectChanges();
    }, 1000);

    Promise.resolve().then(() => (this.count = { value: 5 }));
  }

  add() {
    this.count.value++;
  }
}
