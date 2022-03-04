class Bank_details{
    min_Bal=5000;
    constructor(id,fname,lname){
        this.id=id,
        this.firstName=fname,
        this.lastName=lname
    }

}

class Customer_details extends Bank_details{
    constructor(id,fname,lname,amount,interest,DOB){
        super(id,fname,lname)
        this.damount=amount,
        this.interest=interest,
        this.DOB=DOB
    }
    get_Bal(){
        return (this.damount + this.interest);
    }
}

let c1= new Customer_details(101,"Rahul","Gandhi",5000,45,"1997-12-10");
 console.log(c1);
 console.log(c1.get_Bal());
 var tax= 400;

 module.exports =  tax ;
