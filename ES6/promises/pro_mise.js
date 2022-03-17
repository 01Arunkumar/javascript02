const employees=[{id:101, name:"Priyanka Gandhi", email:"priyanka@gmail.com"},
            {id:102, name: "rahul Gandhi", email:"rahul@gmail.com" }
          ]
        
 let createEmp= (emp) =>{
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            let flag= true;
            employees.push(emp);
            flag ? resolve("successfully inserted emp") : reject("failed -successfully")
         },5000)   
     })
 }

 let getEmployee=()=>{
     setTimeout(()=>{
         let rows="";
         employees.forEach((employee) => {
            rows = rows+`<tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            </tr>`
         }) 
         document.getElementById("demo").innerHTML= rows;
     },1000)
 };
  createEmp({id:103, name:"sonia Gandhi", email:"Sonia@gmail.com"}).then((msg)=>{
      getEmployee();
       console.log(msg);
  }). catch((error)=>{
      console.log("error")
  })
