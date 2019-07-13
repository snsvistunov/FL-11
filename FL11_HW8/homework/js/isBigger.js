function isBigger(a,b){
    return arguments.length>1 ? a>b: false;
}
//Tests
console.log(isBigger(-5,-1));
console.log(isBigger(5,-1));
console.log(isBigger());
console.log(isBigger(5,5));