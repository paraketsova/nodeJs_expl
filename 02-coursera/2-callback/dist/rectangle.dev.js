"use strict";

module.exports = function (x, y, callback) {
  if (x <= 0 || y <= 0) {
    setTimeout(function () {
      return callback(new Error("Rectangle dimentions should be greater than zero: l= " + x + " and b = " + y), null);
    }, 2000); //имитируем задержку ответа
  } else {
    setTimeout(function () {
      return callback(null, {
        perimeter: function perimeter() {
          return 2 * (x + y);
        },
        //не пишем входящие х и у, т.к. они вшли в общий скоуп и т.о. дступны из коллбек ф
        area: function area() {
          return x * y;
        } // -..-..-

      });
    }, 2000); //имитируем задержку твета
  }
};