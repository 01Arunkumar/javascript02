function max_value(a){
    var max=a[0];
    for (var i=1; i<=a.length-1; i=i+1){
        if(a[i]>= max){
           max = a[i];
        }
    }
   return max; 
}
let result= max_value([10,20,30,40]);
console.log(result);
