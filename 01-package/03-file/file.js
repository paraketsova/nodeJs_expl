const fs = require("fs");

// Find text from other file:
/* fs.readFile('data.txt', 'utf8', (error, data) => {
  console.log(data)
  })
  */


//считываем данные из джейсон файла в виде объекта на отдельную персону:

fs.readFile('random.json', 'utf8', (error, data) => {
  data = JSON.parse(data); //распарсили
  console.log(data.results[0].name.first); // взяли из массива нужное+
  console.log(data.results[0].name.last);

  console.log(data.results[0].location.street.name);
  console.log(data.results[0].location.street.number);

  console.log(data.results[0].location.postcode);
  console.log(data.results[0].location.city);
})