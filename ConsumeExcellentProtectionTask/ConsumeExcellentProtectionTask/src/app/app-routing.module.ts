import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:"orders",component:OrderComponent},
  {path:"addOrder",component:AddOrderComponent},
  {path:"payments",component:PaymentComponent},
  {path:"addPayment",component:AddPaymentComponent},
  { path: '',   redirectTo: '/orders', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
