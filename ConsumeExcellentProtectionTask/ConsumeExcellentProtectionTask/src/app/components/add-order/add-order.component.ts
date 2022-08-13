import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  alertflag: boolean |any = false;
  constructor(private router:Router,private orderSevice:OrderService) { }

  order:Order = new Order(0,"",0,0,"",0,0,0);
  ngOnInit(): void {
  }
  onSubmit(){
    this.orderSevice.addOrder(this.order).subscribe({
      next: (result) => {console.log(result),this.alertflag = true},
      error: (err) => console.log(err),
      complete: () => console.log('added'),
    })
    // this.router.navigate(["/orders"]);
  }
  close(){
    this.alertflag = false;
}

}
