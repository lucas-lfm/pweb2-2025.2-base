/**
 * Aula sobre estruturas de repetição 
 * Data: 21/10/2025
 */

const alunos = ["Guilherme", "Saul", "Lupércio", "Rosimeire"];

// for of
for (let aluno of alunos) {
    //console.log(aluno);
}

function imprimir(valor) {
    //console.log(valor);
}

// O forEach() itera um array, chamando uma função para cada elemento
alunos.forEach(imprimir);

/**
 * Repetição em Objetos
 */

const escola = {
    nome: "IFCE campus Tauá",
    endereco: "Rua Antônio Teixeira Benevides, 01, Colibris",
    qtdAlunos: 500,
    CNPJ: "10.744.098/0015-40",
    diretor: "Alan Sombra",
    cursos: ["ADS", "Telemática", "Letras", "Agropecuária", "Redes", "Infonet", "EJA Agroindústria"]
}

// for in percorre propriedades de um objeto
for (let chave in escola) {
    console.log(escola[chave]);
}