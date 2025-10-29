const pTeste = document.getElementById("teste");

pTeste.textContent = "Aqui vai o texto!";
pTeste.style.color = "#671123";
pTeste.style.backgroundColor = "#ffb5c5";

// Gerenciamento de eventos
const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    pTeste.style.color = "#ffb5c5";
    pTeste.style.backgroundColor = "#671123";
});

const formCadastro = document.querySelector("#form-cadastro");

formCadastro.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.querySelector("#input-nome").value;
    const email = document.querySelector("#input-email").value;

    const resultado = document.createElement("p");
    resultado.innerHTML = `Cadastro realizado com sucesso!
                            <br>Nome: ${nome}
                            <br>Email: ${email}`;

    document.body.appendChild(resultado);
});