function reverseNumber(value){
    let sign=Math.sign(value);
    let reverseValue='';
    value=value*sign;
    value+='';
    for (let i=value.length-2;i>=0;i--){
        if (value[i]===0&&reverseValue.length===0){
            continue;
        }    
        reverseValue+=value[i];
    }
    return arguments.length<1 ? false :reverseValue*sign;
}
//Tests
console.log(reverseNumber(243234234111));
console.log(reverseNumber(-1263));
console.log(reverseNumber(-123410));
console.log(reverseNumber(11126322));
console.log(reverseNumber(1000000));