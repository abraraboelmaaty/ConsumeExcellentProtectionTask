import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/_models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments:Payment[] = [];
  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe({
      next:result=>{this.payments=result,console.log(this.payments)}
    })
  }

}
