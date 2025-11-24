/*function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.aniversario = function () {
  this.idade++;
  console.log(`Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`);
};

const p = new Pessoa("João", 22);
console.log(p.nome);
p.aniversario();*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    aniversario() {
        this.idade++;
        console.log(`Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`);
    }
}

const p = new Pessoa("Maria", 23);
console.log(p);
