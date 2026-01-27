// Síncrono e Bloqueante
import { readFileSync } from 'node:fs';

// trava a execução até ler o arquivo
const dados = readFileSync('ex-09-12/arquivo.txt', 'utf-8');

console.log("Leitura concluída:", dados);