// Síncrono e Bloqueante
import { readFile } from 'node:fs';

// trava a execução até ler o arquivo
const dados = readFile('ex-09-12/arquivo.txt', 'utf-8', (err, dados) => {
    if(err) {
        console.log("Erro ao ler arquivo");
        return;
    }

    console.log(dados);
});

console.log("Deveria aparecer após a leitura do arquivo.");
