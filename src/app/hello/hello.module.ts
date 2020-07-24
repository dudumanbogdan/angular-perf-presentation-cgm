import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from 'src/app/hello/hello-container/hello.component';


@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    HelloRoutingModule
  ],
  exports: [HelloComponent]
})
export class HelloModule { }
