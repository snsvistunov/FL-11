function isSmaller(a,b){
    return arguments.length>1 ? !isBigger(a,b): false;
}
function isBigger(a,b){
    return a>b;
}
//Tests
console.log(isSmaller(-5,-1));
console.log(isSmaller(5,-1));
console.log(isSmaller(1,5));
console.log(isSmaller());