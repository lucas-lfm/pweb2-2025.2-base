const log = (nivel) => (tag) => (mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);

log("ERRO")("SERVIDOR")("Falha ao conectar com o servidor!");

const logErroServidor = log("ERRO")("SERVIDOR");
logErroServidor("Falha ao conectar com o servidor!");
logErroServidor("Erro 500");