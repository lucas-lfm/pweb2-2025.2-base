// Nullish Coalescing Operator (Coalescência Nula)
const nome = null;
const nomeValido = nome ?? "Convidado";
console.log(nome);

const pessoa = {
    nome: "João",
    idade: 30,
    endereco: {
        logradouro: "Rua dos bobos",
    }
}

console.log(pessoa.endereco?.logradouro);