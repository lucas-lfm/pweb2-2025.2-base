// Função genérica de 3 argumentos
//const log = (nivel, tag, mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);
//log("ERRO", "API", "Erro ao integrar api de pagamento.");

const log = (nivel) => (tag, mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);

const logInfo = log("INFO");
const logErro = log("ERRO");
const logWarn = log("WARNING");

logInfo("BD", "Conexão bem sucedida!");
logErro("API", "Erro de integração com API de fretes.");
logWarn("LIB", "Algumas dependências estão desatualizadas.");

log("TESTE")("PERFORMANCE", "Teste finalizado com sucesso!");