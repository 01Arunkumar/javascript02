const tax = require('./exportObj')

class Import {
   
   constructor(salary,expendature){
       this.salary= salary,
       this.expandature = expendature 
   }

   bal_Amount(){
       return (this.Salary+ this.expendature)
   }
}
let c3= new Import (100000, 50001);

 console.log(c3);
 console.log(c3.bal_Amount());

