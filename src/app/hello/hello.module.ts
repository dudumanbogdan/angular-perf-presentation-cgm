import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HelloComponent } from 'src/app/hello/hello-container/hello.component';
import { HelloConfigComponent } from './shared/components/hello-config/hello-config.component';
import { HelloCounterComponent } from './shared/components/hello-counter/hello-counter.component';
import { HelloListComponent } from './shared/components/hello-list/hello-list.component';
import { HelloItemComponent } from './shared/components/hello-item/hello-item.component';


@NgModule({
  declarations: [HelloComponent, HelloConfigComponent, HelloCounterComponent, HelloListComponent, HelloItemComponent],
  imports: [
    CommonModule,
    HelloRoutingModule
  ],
  exports: [HelloComponent, HelloConfigComponent, HelloCounterComponent, HelloListComponent]
})
export class HelloModule { }
