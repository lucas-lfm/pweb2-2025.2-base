// Exportação nomeada
function somar(a, b) {
    return a + b;
}

// Exportação nomeada
const PI = 3.1415;

// Exportação default
export default function multiplicar(a, b) {
    return a * b;
}

export { somar, PI };