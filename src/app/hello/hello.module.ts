import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from 'src/app/hello/hello-container/hello.component';
import { HelloConfigComponent } from './shared/components/hello-config/hello-config.component';
import { HelloCounterComponent } from './shared/components/hello-counter/hello-counter.component';


@NgModule({
  declarations: [HelloComponent, HelloConfigComponent, HelloCounterComponent],
  imports: [
    CommonModule,
    HelloRoutingModule
  ],
  exports: [HelloComponent, HelloConfigComponent, HelloCounterComponent]
})
export class HelloModule { }
