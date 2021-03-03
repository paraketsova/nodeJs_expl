"use strict";

var rect = {
  perimeter: function perimeter(x, y) {
    return 2 * (x + y);
  },
  area: function area(x, y) {
    return x * y;
  }
};

function solveRect(l, b) {
  console.log("Solving for rectangle with l=" + l + "and b = " + b);

  if (l <= 0 || b <= 0) {
    console.log("Rectangle dimentions should be greater than zero: l= " + l + " and b = " + b);
  } else {
    console.log("The area of the rectangle is " + rect.area(l, b));
    console.log("The perimeterof rectangle is " + rect.area(l, b));
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);