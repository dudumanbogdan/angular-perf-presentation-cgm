import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCounterComponent } from './hello-counter.component';

describe('HelloCounterComponent', () => {
  let component: HelloCounterComponent;
  let fixture: ComponentFixture<HelloCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
