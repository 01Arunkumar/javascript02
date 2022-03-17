class Main{
    min_Bal = 10000;
    constructor(a,b){
       this.amount= a;
       this.total_Bal= this.min_Bal+a;
       this.date=b;
    }
}
// let obj= new Main(15000, "2022-3-7");
// let cust2= new Main(1500,"2022-2-25");


class Icici_Bank{
    min_Bal= 15000;
    constructor(amount,date){
      super();
      this.rate_Of_Interest="10%";
    }
}
let obj1= new Icici_Bank(5000,"10-3-25");
console.log(obj1);