/**
 * Aula sobre imultabilidade
 * Data: 20/10/2025
 */

// Valores primitivos
let a = "Maria";
a = "Marcos"; // não altera o valor inicial, simplesmente atribui outro valor
a[2] = "l"; // NÃO ALTERA VALOR

console.log(a);

let b = a; // Gera uma cópia do valor
console.log("Valor de a: " + a, "Valor de b: " + b);

b = "Vítor";
console.log("Valor de a: " + a, "Valor de b: " + b);

// Valores por referência
const c = [2, 4, 6, 8, 10];
const d = c;
console.log(c, d);

d[0] = 0;

console.log(c, d);