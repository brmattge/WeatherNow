import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ClimaComponent } from './modules/clima/clima.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '',
    component: ClimaComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
