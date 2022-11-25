import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { BankDetailsComponent } from './bank/bank-details/bank-details.component';

const routes: Routes = [
  { path: 'bank', component: BankComponent },
  { path: 'bank/transaction', component: BankDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
