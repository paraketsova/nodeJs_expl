module.exports = (x, y, callback) => {
  if(x <= 0 || y <= 0) {
    setTimeout(() => 
      callback(new Error("Rectangle dimentions should be greater than zero: l= " + x + " and b = " + y), 
      null), 
      2000); //имитируем задержку ответа
  } else {
    setTimeout(() => 
      callback(null,
      {
        perimeter: () => (2*(x+y)), //не пишем входящие х и у, т.к. они вшли в общий скоуп и т.о. дступны из коллбек ф

        area:() => (x*y) // -..-..-
      }), 
      2000); //имитируем задержку твета
  }
}

