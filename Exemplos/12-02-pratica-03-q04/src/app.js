import { calcularMedia, VALOR_PI } from "./utils/calculadora.js";
import buscarDados from "./services/dados.js";

async function main() {
    const dados = await buscarDados(); // simulação

    const media = calcularMedia(dados);

    console.log(`Média calculada ${media}`);
    console.log(`Valor de PI: ${VALOR_PI}`);
}

main();