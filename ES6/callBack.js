function fName(a,sName){
    setTimeout(()=>{
       console.log(a);
      
    },4000)
    sName("asdf")
}

function lName(b){
    console.log(b);
}
fName("Arun",lName);