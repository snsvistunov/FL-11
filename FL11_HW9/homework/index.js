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
console.log(getNumbers('d2hnm2n234n2mjd4.8'));
console.log(getNumbers('sdfkhsdflkhsdlfkhslkdf'));
console.log(getNumbers('sdf2df'));
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
console.log(findTypes('number'));
console.log(findTypes(null, NaN, 'number', testNumber));
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
//showFormattedDate() function declaration
function showFormattedDate(dateObject){
    const month={
        0:'Jan',
        1:'Feb',
        2:'Mar',
        3:'Apr',
        4:'May',
        5:'Jun',
        6:'Jul',
        7:'Aug',
        8:'Sep',
        9:'Oct',
        10:'Now',
        11:'Dec'
    };
    return 'Date: '+month[dateObject.getMonth()]+' '+dateObject.getDate()+' '+dateObject.getFullYear();    
}
//Tests showFormattedDate() 
console.log(showFormattedDate(new Date('2019-01-27T01:10:00'))); 
//canConvertToDate() function declaration
function canConvertToDate(string){
    let newDate=new Date(string);
    return !isNaN(newDate.getFullYear());
}
//Tests canConvertedToDate()  
console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));
//canConvertToDate() function declaration
function daysBetween(firstDate, secondDate){
    const hoursPerDay=24;
    const minutesPerHour=60;
    const secondsPerMinute=60;
    const milisecondsPerSecond=1000;
    const oneDay = hoursPerDay*minutesPerHour*secondsPerMinute*milisecondsPerSecond; 
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/oneDay));
}
//Tests canConvertedToDate()
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))); 
function getAmountOfAdultPeople(data) {
    let result=[];
    result=filterArray(data, function(el){
        let currentDate=new Date();
        const daysPerYear=365;
        const hoursPerDay=24;
        const minutesPerHour=60;
        const secondsPerMinute=60;
        const milisecondsPerSecond=1000;
        const oneDay=hoursPerDay*minutesPerHour*secondsPerMinute*milisecondsPerSecond;
        const oneYear=oneDay*daysPerYear; 
        const adultAge=18;
        let birthdayDate=new Date(el[' birthday ']);
        let age=Math.round(Math.abs((currentDate.getTime() - birthdayDate.getTime())/oneYear));
        return age>=adultAge;
    });
    return result.length;
}
//Tests getAmountOfAdultPeople()
let data=[
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]
  ;
console.log(getAmountOfAdultPeople(data));

//keys() function declaration
function keys(obj){
    let result=[];
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            result.push(key);
        }
    }
    return result;
}
//values() function declaration
function values(obj){
    let result=[];
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            result.push(obj[key]);
        }
    }
    return result;
}
//Tests keys() & values()
let dataExample= {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  };
console.log(keys(dataExample));
console.log(values(dataExample));