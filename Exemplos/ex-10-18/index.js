// Trabalhando com objetos literais em JS

const produto = {
    nome: "Arroz Mariano",
    preco: 25.90,
    id: "AM23",
    unidade: "KG",
    categoria: "Gênero Alimentício",

    toString: function() {
        return "Nome: " + this.nome + "\nPreço: " + this.preco;
    }
}

console.log(produto.toString());