function gerarContador() {
    let count = 0;

    return function incrementar() {
        return count++;
    }
}

const contador = gerarContador();

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());

function createTax(tax) {

    return function(value) {
        return value * tax;
    };
}

const taxIPTU = createTax(0.14);
const taxIPVA = createTax(0.04);
const taxICMS = createTax(0.21);

console.log(taxIPTU(100000));