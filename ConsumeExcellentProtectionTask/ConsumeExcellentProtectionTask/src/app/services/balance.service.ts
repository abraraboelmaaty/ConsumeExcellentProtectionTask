import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Balance } from '../_models/balance';


@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http:HttpClient) { }
  private baseUrl:string = './../../assets/balance.json';

  getAllOrders(){
    return this.http.get<Balance>(this.baseUrl);
  }
  addOrder(balance:Balance){
    return this.http.put<Balance>(this.baseUrl,balance)
  }
}
