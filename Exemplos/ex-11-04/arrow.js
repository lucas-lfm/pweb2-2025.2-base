// const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

sum(3, 5);

// tradicional
function sum(a, b) {
    return a + b;
}

// Functio Expression
// Função anônima
// Functions Expressions não são elevadas ao topo do escopo (hoisting)
const sumFe = function(a, b) {
    return a + b;
}

// Arrow Function
const sumArrow = (a, b) => a + b;

const dobro = a => a * 2;


setTimeout(() => console.log(Date.now()), 1500);
setInterval(() => console.log("Executando..."), 2500);
