function identical_value(a){
    let first=a[0];
    for( num of a){
        if (num != first){
            return false;
        }
    }
    return true;
}
let result= identical_value([22, 22]);
console.log(result);
let result1= identical_value([24,24]);
console.log(result1);