/* const rect = {
  perimeter: (x, y) => (2 * (x + y)), 
  area: (x, y) => (x * y)
}; */

const rect = require('./rectangle');

function solveRect(l, b) {
  console.log("Solving for rectangle with l=" + l + "and b = " + b);
  if(l <=0 || b<=0) {
    console.log("Rectangle dimentions should be greater than zero: l= " + l + " and b = " + b);
  } else {
    console.log("The area of the rectangle is " + rect.area(l,b));
    console.log("The perimeterof rectangle is " + rect.area(l,b));
  }
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);