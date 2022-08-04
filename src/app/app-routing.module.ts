import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';

const routes: Routes = [
  {path:'currency-converter', component:CurrencyConvertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
