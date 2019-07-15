// Your code goes here
//getNumbers() function declaration
function getNumbers(str){
    let arrayOfNumbers=[];
     for(let i=0;i<str.length;i++){
        if (!isNaN(+str[i])){
            arrayOfNumbers[arrayOfNumbers.length]=+str[i];
        }
    }
    return arrayOfNumbers;
}
//Tests getNumbers();
/*console.log(getNumbers('d2hnm2n234n2mjd4.8'));
console.log(getNumbers('sdfkhsdflkhsdlfkhslkdf'));
console.log(getNumbers('sdf2df'));*/
//findTypes() function declaration
function findTypes(){
    let countTypes={};
    for(let i=0;i<arguments.length;i++){
        let key=typeof arguments[i];
        if (! (key in countTypes)){
            countTypes[key]=1;
        }else{
            countTypes[key]+=1;
        }
    }
    return countTypes;
}
//Tests findTypes();
let testNumber=4;
/*console.log(findTypes('number'));
console.log(findTypes(null, NaN, 'number', testNumber));*/
//executeforEach() function declaration
function executeforEach(array,func){
    for (let i=0;i<array.length;i++){
       func(array[i]);
    } 
}
//Tests executeforEach() 
let testArrayForEach=[];
testArrayForEach.length=5;
for (let i=0;i<testArrayForEach.length;i++){
    testArrayForEach[i]=i+1;
}
executeforEach(testArrayForEach, function(el) { 
    console.log(el);
});
//mapArray() function declaration
function mapArray(array,func){
    let result=[];
    executeforEach(array,function(el){
        result.push(func(el));
    });
    array=result;
    return array;
}
//Tests executeforEach() 
console.log(mapArray(testArrayForEach,function(el) { 
    const delta=3;
    return el+delta;
}));
//filterArray() function declaration
function filterArray(array,func){
    let result=[];
    executeforEach(array,function(el){
        if (func(el)){
            result.push(el);
        }
    });
    array=result;
    return array;
}
//Tests filterArray() 
console.log(filterArray(testArrayForEach,function(el) { 
    const num=3;
    return el>num;
}));