export class Order{
  constructor(
    public id:number,
    public item:string,
    public quantity:number,
    public price:number,
    public status:string,
    public totalPrice:number,
    public paid:number,
    public rest:number
  ){

  }

}
