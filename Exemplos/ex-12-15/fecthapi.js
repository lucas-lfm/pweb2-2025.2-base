/** 
 * Exemplo de uso do Fetch API para buscar dados de uma API pública.
 * O Fetch API retorna uma Promise que é resolvida com a resposta da requisição.
 * No primeiro then(), a resposta é convertida para JSON, que retorna outra Promise.
 * No segundo then(), os dados JSON são processados (neste caso, exibidos no console).
 * 
 * fetch('https://fakestoreapi.com/products')
 * .then(response => response.json())
 * .then(data => console.log(data))
 * .catch( err => console.error(err) )
 * .finally( () => console.log("Busca de produtos finalizada.") ); 
 * */

// Usando async/await para lidar com Promises de forma mais "síncrona"
// Na verdade, o código continua sendo assíncrono, mas a sintaxe é mais familiar.
async function buscarProdutos() {
    try {
        // O await aguarda a resposta da requisição fetch antes de prosseguir
        const resposta = await fetch('https://fakestoreapi.com/products');

        // O await aguarda a conversão da resposta para JSON antes de prosseguir
        const dados = await resposta.json();

        // Esse console.log só é executado após os awaits acima serem concluídos
        console.log(dados);

        // É muito importante tratar erros em operações assíncronas, nesse caso usamos try/catch
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Busca de produtos finalizada.");
    }
}

// Chama a função assíncrona para buscar os produtos
buscarProdutos();

// Código síncrono continua rodando enquanto a busca está em andamento
// Logo, esse console.log é executado antes dos dados serem exibidos
console.log("Fim do código síncrono...");