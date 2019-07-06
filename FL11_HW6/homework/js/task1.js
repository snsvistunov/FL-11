// Your code goes here
let aX=+prompt('Please enter a1 numeric values - X coordinate');
let aY=+prompt('Please enter a2 numeric values - Y coordinate');
let bX=+prompt('Please enter b1 numeric values - X coordinate');
let bY=+prompt('Please enter b2 numeric values - X coordinate');
let cX=+prompt('Please enter c1 numeric values - Y coordinate');
let cY=+prompt('Please enter c2 numeric values - X coordinate');
const divHalf=2;
if ((cX-aX)/(bX-aX)===(cY-aY)/(bY-aY)&&cX===(aX+bX)/divHalf&&cY===(aY+bY)/divHalf){
    console.log('true');
} else {
    console.log('false');
}