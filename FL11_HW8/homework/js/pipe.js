function pipe (){
    let result=arguments[0];
    for (let i=1;i<arguments.length-1;i++){
        let func=arguments[i]
        result+=func(result);
    }
    return arguments.length<1 ? false:result;
}
function addOne(x){
    return x+1;
}
//Tests
console.log(pipe(1,addOne));
console.log(pipe(1,addOne,addOne));
console.log(pipe(2,addOne,addOne));
console.log(pipe());