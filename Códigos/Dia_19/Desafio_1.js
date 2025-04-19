// Desafio parcelas fatura cartão de crédito

const fatura = [
    {
      descricao: "Celular",
      valor: 1200.00,
      parcelas: [
        { descricao: "Seguro", valor: 100.00 },
        { descricao: "Película", valor: 30.00 }
      ]
    },
    {
      descricao: "Notebook",
      valor: 3000.00,
      parcelas: [
        {
          descricao: "Assistência técnica",
          valor: 200.00,
          parcelas: [
            { descricao: "Visita técnica", valor: 50.00 }
          ]
        }
      ]
    },
    {
      descricao: "Livro",
      valor: 89.90
    },

  ];


function calcularFaturalTotal(fatura){
    let total = 0;

    for(const item of fatura){
        total += item.valor;

        if (item.parcelas){
            total += calcularFaturalTotal(item.parcelas);
        }
    }

    return total;
}

console.log("A fatura total do cartão é:",calcularFaturalTotal(fatura));