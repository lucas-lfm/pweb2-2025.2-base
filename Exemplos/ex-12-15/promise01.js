// A função simularChamadaAPI retorna uma Promise que simula uma chamada a uma API
// com um atraso de 2 segundos. A Promise é resolvida com um objeto de resposta ou
// rejeitada com uma mensagem de erro, dependendo de uma condição aleatória.
function simularChamadaAPI() {
    return new Promise((resolve, reject) => {
        console.log("Chamando API...");

        setTimeout(() => {
            // Adiciona um elemento de aleatoriedade para simular sucesso ou falha na chamada
            const sucesso = Math.random() > 0.2; // 80% de chance de sucesso

            if (sucesso) {
                // Simula uma resposta bem-sucedida da API
                resolve( { status: "ok", dados: [1, 2, 3] } );
            } else {
                // Simula uma falha na chamada da API
                reject( "Erro ao chamar API" );
            }
        }, 2000);
    });
}

// Utiliza a função simularChamadaAPI e trata a Promise retornada com then e catch.
// then() recebe a resposta em caso de sucesso e realiza a operação desejada.
// catch() captura qualquer erro que ocorra durante a chamada da API.
// finally() é usado para executar um código que deve rodar independentemente do resultado.
simularChamadaAPI()
    .then( (resposta) => console.log(resposta.dados) )
    .catch( (erro) => console.error(erro) )
    .finally( () => console.log("Chamada à API finalizada.") );