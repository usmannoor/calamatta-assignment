import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './stocks.component';

const routes: Routes = [
  { path: '', redirectTo: 'stocks', pathMatch: 'full' },
  { path: 'stocks', component: StocksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
