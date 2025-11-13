/**
 * 
 * @param {nome, preco, categoria} p => define um objeto do tipo produto para ser validado
 * @returns {ok: boolean, erros: []} => retorna um objeto indicando sucesso ou falha na validação e um array de erros, caso existam. 
 */
function validarProduto(p) {
    const erros = [];

    if(p.nome.trim() == "") {
        erros.push("O nome não pode ser vazio!");
    }

    if(Number(p.preco) <= 0) {
        erros.push("O preço deve ser maior do que 0!");
    }

    if(p.categoria.trim() == "") {
        erros.push("A categoria não pode ser vazia!");
    }

    return {
        ok: erros.length === 0,
        erros
    };
}

function renderizarErros(resultadoValidacao) {
    if (resultadoValidacao.ok) {
        return;
    }

    const listaErros = document.createElement("ul");

    resultadoValidacao.erros.forEach((erro) => {
        const itemErro = document.createElement("li");
        itemErro.innerText = erro;
        listaErros.appendChild(itemErro);
    });

    document.querySelector("#erros").appendChild(listaErros);
}

const form = document.getElementById("form-cadastro");
const divErros = document.querySelector("#erros");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    divErros.innerHTML = "";

    const nome = form.querySelector("#nome").value;
    const preco = form.querySelector("#preco").value;
    const categoria = form.querySelector("#categoria").value;

    const produto = {
        nome,
        preco,
        categoria
    };

    const resultadoValidacao = validarProduto(produto);

    renderizarErros(resultadoValidacao);
});