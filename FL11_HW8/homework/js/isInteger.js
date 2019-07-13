function isInteger(num){
    return arguments.length<1 ? false : typeof num==='number'&&!(num % 1);
}
//Tests
console.log(isInteger());
console.log(isInteger(-5));
console.log(isInteger('5'));
console.log(isInteger(3.1));
console.log(isInteger(234234));

