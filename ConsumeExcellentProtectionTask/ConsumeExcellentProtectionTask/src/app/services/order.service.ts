import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  private baseUrl:string = 'http://localhost:5278/api/order';
  //private baseUrl:string = 'http://localhost:60978/api/order';//IIS Express
  getAllOrders(){
    return this.http.get<Order[]>(this.baseUrl);
  }
  addOrder(order:Order){
    return this.http.post<Order>(this.baseUrl,order)
  }
}
