import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../_models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  Balance:number = 5000;
  constructor(private http:HttpClient) { }
  private baseUrl:string = 'http://localhost:5278/api/payment';
  //private baseUrl:string = 'http://localhost:60978/api/payment';//IIS Express
  getAllPayments(){
    return this.http.get<Payment[]>(this.baseUrl);
  }
  addPayment(payment:Payment){
    return this.http.post<Payment>(this.baseUrl,payment)
  }
}
