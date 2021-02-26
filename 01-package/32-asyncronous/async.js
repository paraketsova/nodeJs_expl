const { rejects } = require("assert");
const { resolve } = require("path");

function doSomething(value) {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

async function somethingElse(value) {
  let x = doSomething(5);
  console.log(x);
}

somethingElse(5);