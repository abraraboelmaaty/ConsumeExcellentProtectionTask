import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/_models/payment';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css','./../add-order/add-order.component.css']
})
export class AddPaymentComponent implements OnInit {



balance:number = this.paymentService.Balance;
  alertflag: boolean |any = false;


  constructor(private router:Router,private paymentService:PaymentService) { }

  payment:Payment = new Payment(0,0,new Date());
  ngOnInit(): void {
    // console.log(this.balance)
  }

  onSubmit(){
    this.paymentService.addPayment(this.payment).subscribe({
      next: (result) => {console.log(result),this.alertflag = true,this.balance -= this.payment.ammount,console.log(this.balance)},
      error: (err) => console.log(err),
      complete: () => console.log('added'),
    })

  }
  balanceClasses() {
    if (this.balance >= 5000) {
      return 'alert-success';
    } else if (this.balance >= 3000 && this.balance < 5000) {
      return 'alert-warning';
    } else {
      return 'alert-danger'
    }
  }

  close(){
    this.alertflag = false;
}


}
