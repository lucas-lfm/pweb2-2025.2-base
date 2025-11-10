/**
 * Higher-Order Functions - map, filter e reduce (métodos de iteração)
 */

const nums = [3, 5, 6, 12, 43, 56, 78, 39];

// map() realiza um mapeamento em cima de um array, gerando um novo array transformado
const dobro = nums.map(num => num * 2);
console.log(dobro);

// filter() itera em cima de um array, realizando uma operação de filtragem dos elementos. Retorna um novo array.
const pares = nums.filter(num => num % 2 === 0);
console.log(pares);

// reduce() - itera um array, realizando uma operação de redução e retornando um único valor ao final.
const soma = nums.reduce((acc, num) => acc + num, 100);
console.log(soma);