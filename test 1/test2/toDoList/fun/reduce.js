const arr=[2,4,6,8,10];
let reduceArray = arr.reduce((accumulator, num)=>{
    return accumulator+num;
},5);
console.log(reduceArray);