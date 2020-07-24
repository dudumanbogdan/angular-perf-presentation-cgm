import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from 'src/app/hello/hello-container/hello.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hello' },
  { path: 'hello', component: HelloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
