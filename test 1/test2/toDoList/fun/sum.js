function sum_value(a){
var sum = 0;
for( num of a){
    sum+=num;
}
return sum;
}
let result= sum_value([1,2,3,4,5,5,6]);
console.log(result);