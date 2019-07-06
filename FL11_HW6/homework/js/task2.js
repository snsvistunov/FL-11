// Your code goes here
let a=+prompt('Please enter length a');
let b=+prompt('Please enter length b');
let c=+prompt('Please enter length c');
if (a+b>c&&a+c>b&&b+c>a){
    if (a===b&&b===c){
        console.log('Eequivalent triangle');
    } else if (a===b||a===c||b===c){
        console.log('Isosceles triangle');
    } else{
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}