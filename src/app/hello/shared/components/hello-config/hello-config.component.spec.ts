import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloConfigComponent } from './hello-config.component';

describe('HelloConfigComponent', () => {
  let component: HelloConfigComponent;
  let fixture: ComponentFixture<HelloConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
