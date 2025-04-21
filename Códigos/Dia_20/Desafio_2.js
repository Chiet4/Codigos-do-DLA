const mensagens = [
    {
      nome: "Ana",
      mensagem: "Oi, você viu o relatório que mandei ontem?",
      telefone: "11999999999",
      data: "2025-04-01"
    },
    {
      nome: "Bruno",
      mensagem: "Vamos almoçar juntos amanhã?",
      telefone: "11988888888",
      data: "2025-04-15"
    },
    {
      nome: "Carlos",
      mensagem: "Segue o relatório atualizado.",
      telefone: "11977777777",
      data: "2025-04-20"
    },
    {
      nome: "Daniela",
      mensagem: "Relatório final enviado. Verifique!",
      telefone: "11966666666",
      data: "2025-04-20"
    },
    {
      nome: "Vanessa Weber",
      mensagem: "Está chegando ao fim do Desafio do Código Fonte TV",
      telefone: "12977445588",
      data: "2025-04-21"
    }
  ];

function buscaMensagem(lista, palavra, indice = 0, encontrados = []) {
  if (indice >= lista.length) return encontrados;

  const msg = lista[indice].mensagem.toLowerCase();

  if (msg.includes(palavra.toLowerCase())){
    encontrados.push({
      nome: lista[indice].nome,
      telefone: lista[indice].telefone,
      data: lista[indice].data
    });
  }
  return buscaMensagem(lista, palavra, indice + 1, encontrados);
}

const resultados = buscaMensagem(mensagens, "relatório");

console.log("Mensagens contendo a palavra 'relatório' encontradas:") 
resultados.forEach( resultado => {
  console.log(`Nome: ${resultado.nome} \nTelefone: ${resultado.telefone} \nData: ${resultado.data}.`)
})