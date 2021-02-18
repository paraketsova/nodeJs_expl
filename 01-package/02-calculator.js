let x = process.argv[2];
let sign = process.argv[3];
let y = process.argv[4];

if("+" === sign) {
  console.log(`${x} + ${y} = ${Number(x) + Number(y)}`);
}

if("-" === sign) {
  console.log(`${x} - ${y} = ${Number(x) - Number(y)}`);
}

if("*" === sign) {
  console.log(`${x} * ${y} = ${Number(x) * Number(y)}`);
}

if("/" === sign) {
  console.log(`${x} / ${y} = ${Number(x) / Number(y)}`);
}