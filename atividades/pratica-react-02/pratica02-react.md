# Programação Web II - ADS 2025.2


> **_Prática React 02_** - _Consumo de APIs, Manipulação de Dados e Roteamento_
>
> - **🎯 Objetivo:** Expandir o projeto desenvolvido na prática anterior ([pratica-react-01](../pratica-react-01/pratica01.md)), implementando funcionalidades adicionais que envolvem o consumo de APIs, manipulação de dados e roteamento entre páginas.
> - **🚨 Observações e Instruções Gerais:**
>   - Utilize o código base, tabalhado na prática 01, disponibilizado no repositório da disciplina no GitHub ([pratica-react-01/code-base](../pratica-react-01/codigo-base/)).
>   - Você pode utilizar qualquer biblioteca adicional que achar necessária para implementar as funcionalidades, mas certifique-se de que elas sejam compatíveis com a versão do React utilizada no projeto.
>   - Fique livre para estilizar a aplicação como desejar, mas o foco principal deve ser na implementação das funcionalidades solicitadas.
>   - As atualizações devem ser versionadas e commitadas no mesmo repositório da entrega da prática 01, em um branch chamado `pratica-react-02`.
>   - A prática deve ser entregue através do Classroom, com o link do repositório contendo o branch `pratica-react-02`.
>   - A avaliação será feita com base em testes, análise do código e análise da qualidade das mensagens de commits (seguindo _**conventional commits**_).

---

## Descrição da Prática

Nesta prática, você irá expandir a aplicação React desenvolvida na prática anterior, que envolveu a criação de uma interface básica para exibir anúncios de veículos. A seguir estão as tarefas que você deve realizar nesta prática:

---

### 🎯 **TASK-01** - Cadastro de Anúncio

**Objetivo** - Implementar um formulário para que os usuários possam cadastrar novos anúncios de veículos.

- ***Entrega esperada:***
  - Criar uma nova página (rota) com um formulário que permita aos usuários inserir informações sobre um novo anúncio, incluindo, mas não se limitando a:
    - Título do anúncio.
    - Descrição.
    - Preço.
    - Ano.
    - Quilometragem.
    - Dados de contato do vendedor.
    - Imagem do veículo (URL).
        > - 🚨 Não precisa implementar upload de imagens, apenas colete uma URL pública.
        > 🚨 Será necessário alterar um pouco a estrutura do arquivo `db.json` para incluir campos adicionais para as informações de contato do vendedor e URL da imagem de anúncio.
  
  - Utilizar o [React Router](https://reactrouter.com/) para gerenciar o roteamento entre a página principal e a página de cadastro de anúncios.
  
  - Validar os dados do formulário antes de permitir o envio (por exemplo, garantir que todos os campos obrigatórios estejam preenchidos).

  - Ao enviar o formulário, o novo anúncio deve ser adicionado à lista de anúncios exibida na página principal.

    > - **Dica:** Veja como gerenciar formulários em React na documentação oficial: https://react.dev/reference/react-dom/components/form

    > - **Dica:** Veja como gerenciar a navegação programática com React Router (para redirecionar após o envio do formulário) na documentação oficial: https://reactrouter.com/start/data/navigating

    > - Veja a documentação do React Router para mais detalhes sobre como configurar rotas e navegar entre páginas: https://reactrouter.com/start/data/installation

---

### 🎯 **TASK-02** - Página de Detalhes de Anúncio

**Objetivo** - Implementar uma página de detalhes do anúncio que exibe informações adicionais sobre um veículo selecionado. 

- ***Entrega esperada:***
  - Ao clicar em um anúncio na página principal, o usuário deve ser redirecionado para uma nova página que exibe detalhes completos do anúncio, incluindo:
    - Imagem de capa do anúncio.
    - Descrição detalhada.
    - Especificações técnicas (ano, quilometragem, etc.).
    - Informações de contato do vendedor.
  
  - Utilizar o [React Router](https://reactrouter.com/) para gerenciar o roteamento entre a página principal e a página de detalhes do anúncio.

  - A URL da página de detalhes deve incluir o ID do anúncio (por exemplo, `/anuncio/123`).

    > - **Dica:** Utilize o hook `useParams` do React Router para capturar o ID do anúncio na URL e buscar os dados correspondentes.