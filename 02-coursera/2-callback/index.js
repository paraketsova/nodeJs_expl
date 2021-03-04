const rectangle = require('./rectangle');
const rect = require('./rectangle');

function solveRect(l, b) {
  console.log("Solving for rectangle with l=" + l + "and b = " + b);

  rect(l,b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message)
    } else {
      console.log("The area of the rectangle of demensions l = " + l + " and b = " +
       b + " is " + rectangle.area() ); //здесь мы тоже не пишем входящие аргументы, т.к. они доступны этой коллбек функции внутри ф солвеРект   
       console.log("The peremiter of the rectangle of demensions l = " + l + " and b = " +
       b + " is " + rectangle.perimeter() ); 
    }
      console.log("This statement is after the call to rect()")

  });

}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);