import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloItemComponent } from './hello-item.component';

describe('HelloItemComponent', () => {
  let component: HelloItemComponent;
  let fixture: ComponentFixture<HelloItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
