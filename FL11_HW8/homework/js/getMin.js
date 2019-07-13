function getMin() {
let min=arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i]<min){
            min=arguments[i];
        }
    }
return arguments.length<1 ? false:min;
}
//Tests
console.log(getMin(4,5,2,52,1,4));
console.log(getMin(4,2,1,4));
console.log(getMin(4,5,-22,-152,-11,4));
console.log(getMin());