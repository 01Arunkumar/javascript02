let employees=[{id:101, name:"sonia", email:"sonia@gmail"},{id:102, name:"rahul", email:"rahul@gmail.com"}]

let createEmployee= (emp)=>{
    return new Promise((response,reject)=>{
        setTimeout(()=>{
           let flag=true;
           employees.push(emp);
           flag? response("inserted successfully"): reject("error insertion");
        },3000)
    })
};


let getEmployee =()=>{
   setTimeout(()=>{
    let rows="";
    employees.forEach((empl)=>{
        rows += `<tr>
                 <td>${empl.id}</td>
                 <td>${empl.name}</td>
                 <td>${empl.email}</td>
                 </tr>`
    })  
    document.getElementById("demo").innerHTML=rows;  
   },1000)
}
    
  
let run= async()=>{
    await createEmployee({id:103, name:"priyanka", email:"priyanka@gmail.com"});
    getEmployee();
};
run();
