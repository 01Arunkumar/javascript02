class BankAccount{
    min_Bal=5000;
    rate= 3;
	constructor(id,name,amount,due=10,interest){
	  this.id=id;
	  this.name=name;
	  this.amount=amount;
	  this.due="";
	  this.interest=5000/interest;
	}
    get_details(id){
        if(id= this.id){
            console.log(new BankAccount(id))
        }
    }
}

let c1=new BankAccount(101 ,"rahul",105000, 50,90);
let c2=new BankAccount(102 ,"ramesh", 85000, 20,40);
let c3=new BankAccount(103 ,"raju", 29999, 40,40);
let c4=new BankAccount(104 ,"raghu", 50000, 90,30);



