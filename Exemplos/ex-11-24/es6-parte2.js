// Spread Operator (Operador de espalhamento)
const numeros = [23, 2, 32, 12];
const numeros2 = [30, ...numeros, 23];

// Spread Operator em Objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinadoObj = { ...obj1, ...obj2 };
console.log(combinadoObj); // { a: 1, b: 2, c: 3, d: 4 }

const copiaObj1 = { ...obj1 };
console.log(copiaObj1); // { a: 1, b: 2 }

const obj3 = { ...obj1, b: 5, z: 99 }; // Sobrescreve a propriedade 'b' e adiciona 'z'
console.log(obj3); // { a: 1, b: 5, z: 99 }