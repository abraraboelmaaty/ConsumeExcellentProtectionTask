import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  balance:number = this.paymentService.Balance;
  orders:Order[] = [];
  constructor(private router:Router,private orderService:OrderService,private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe({
      next:result=>{this.orders=result,console.log(this.orders)}
    })
    console.log(this.balance)
  }

}
