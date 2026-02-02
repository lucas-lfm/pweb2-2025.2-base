import { useState } from "react";
import "./App.css";

export default function App() {
  // será necessário armazenar a altura, o peso e o resultado do IMC como estados
  // logo, as duas primeiras variáveis abaixo devem ser convertidas em estados
  const [altura, setAltura] = useState(0); // essa é uma variável comum do JavaScript, o React não controla o valor dela como estado
  const [peso, setPeso] = useState(0); // essa é uma variável comum do JavaScript, o React não controla o valor dela como estado

  // o hook useState cria um estado controlado pelo React
  // ele devolve um array com duas posições:
  // 1ª posição: o valor atual do estado
  // 2ª posição: uma função para atualizar o valor do estado
  const [imc, setImc] = useState(0);

  const calcularIMC = (evento) => {
    evento.preventDefault();
    setImc((peso / (altura * altura)).toFixed(2));
  };

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <p>Informe seus dados no formulário abaixo.</p>

      <form onSubmit={calcularIMC}>
        <label htmlFor='altura'>Altura</label>
        <input
          type='number'
          id='altura'
          placeholder='Sua altura em metros'
          step={0.01}
          min={0}
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <label htmlFor='peso'>Peso</label>
        <input
          type='number'
          id='peso'
          placeholder='Seu peso em kg'
          step={0.01}
          min={0}
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <button>Calcular</button>

        {/** renderização condicional: só exibe o resultado se o imc for maior que 0
         * perceba que usamos chaves {} para inserir código JavaScript dentro do JSX
         */}
        {imc > 0 && (
          <div className='resultado'>
            <h2>Seu IMC é de {imc}</h2>
          </div>
        )}
      </form>
    </>
  );
}
