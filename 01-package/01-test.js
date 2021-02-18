//console.log("hello");


// Задать аргументы в теле файла и, вводя данные имени и возраста в терминале, получить результат по всем аргв:
/* let nodePath = process.argv[0];
let testPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];

console.log("nodePath: " + nodePath);
console.log("testPath: " + testPath);
console.log();
console.log("name: " + name);
console.log("age: " + age); */



//print process.argv

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
})

// variations print process.argv

  console.log(`My name is ${process.argv[2]}. Hello!`);
  console.log(`And name is ${process.argv[3]}. Glad to see you!`);


