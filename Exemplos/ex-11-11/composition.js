const produtos = [
  { nome: "Teclado Mecânico", preco: 249.90, qtd: 15, categoria: "informática" },
  { nome: "Mouse Sem Fio", preco: 99.50, qtd: 30, categoria: "informática" },
  { nome: "Fone Bluetooth", preco: 179.00, qtd: 22, categoria: "eletrônicos" },
  { nome: "Camiseta Algodão", preco: 49.90, qtd: 40, categoria: "vestuário" },
  { nome: "Tênis Esportivo", preco: 299.00, qtd: 12, categoria: "esportes" },
  { nome: "Cafeteira Elétrica", preco: 219.99, qtd: 8, categoria: "eletrodomésticos" },
  { nome: "Livro JS Moderno", preco: 89.00, qtd: 25, categoria: "livros" },
  { nome: "Creme Hidratante", preco: 39.90, qtd: 18, categoria: "beleza" },
  { nome: "Cadeira Gamer", preco: 899.00, qtd: 5, categoria: "móveis" },
  { nome: "Bloco de Montar", preco: 59.90, qtd: 27, categoria: "brinquedos" }
];

const valorTotal = produtos.filter(p => p.categoria == "informática")
                        .map(p => {
                            const newP = {...p};
                            newP.preco = newP.preco * (1 - 0.1);
                            return newP;
                        })
                        .reduce((acc, p) => acc + (p.preco * p.qtd), 0);

console.log(valorTotal);