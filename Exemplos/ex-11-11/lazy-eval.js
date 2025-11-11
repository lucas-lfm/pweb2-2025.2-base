function eager(a, b) {
  // simulando processamento pesado
  const inicio = Date.now();
  while (Date.now() - inicio < 3000) {
    // espera ativa (busy waiting) por 3000ms
  }

  const valor = Math.pow(a, 3);

  return valor + b;
}

console.time("Eager Execution Time");
console.log(eager(2, 100)); // 108
console.log(eager(2, 200)); // 208
console.log(eager(2, 300)); // 308
console.timeEnd("Eager Execution Time");

function lazy(a) {
  // simulando processamento pesado
  const inicio = Date.now();
  while (Date.now() - inicio < 3000) {
    // espera ativa (busy waiting) por 3000ms
  }

  const valor = Math.pow(a, 3);

  return function (b) {
    return valor + b;
  };
}

console.time("Lazy Execution Time");
const lazy2 = lazy(2);
console.log(lazy2(100)); // 108
console.log(lazy2(200)); // 208
console.log(lazy2(300)); // 308
console.timeEnd("Lazy Execution Time");
