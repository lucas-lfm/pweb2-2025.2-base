// IEEE 754-2008
let a = 0.7;
let b = 0.1;

let c = a + b;

console.log(typeof c.toFixed(2));

c = Number(c.toFixed(2));

console.log(c, typeof c);

