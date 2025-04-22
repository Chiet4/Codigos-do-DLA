
const conta = {
    saldo: 50000,
    limiteDiario: 10000,
    totalTransferidoHoje: 0,
    historicoTransacoes: [],
    totalPorChave: {} // Armazena total transferido por chave Pix
  };

function enviarPix(chavePix, valor, mensagem){
  if(valor > conta.saldo){
    console.log("Erro: Saldo insuficiente.")
    return;
  }

  // verificar se já foi ultrapasso o limite de 10.000 em transferências
  const totalChave = conta.totalPorChave[chavePix] || 0;
  const chaveBloqueada = totalChave >= conta.limiteDiario;

  // verifica se a transferencia ultrapassa o limite diário caso a chave Não esteja desbloqueada.
  if(!chaveBloqueada && (conta.totalTransferidoHoje + valor > conta.limiteDiario)) {
    console.log("Erro: Límite diário de transferência atigindo.");
    return;
  }

  // realizando transferencia
  conta.saldo -= valor;
  conta.totalTransferidoHoje += valor;
  conta.totalPorChave[chavePix] = totalChave + valor;

  // registro de transação
  conta.historicoTransacoes.push({
    chavePix,
    valor,
    mensagem
  });
  console.log("Pix enviado com sucesso!")
}

function cancelarPix(indice) {
  if (indice < 0 || indice >= conta.historicoTransacoes.length) {
    console.log("Erro: Índice inválido.");
    return;
  }

  // Recupera a transação a ser cancelada
  const transacao = conta.historicoTransacoes[indice];

  // Remove a transação do histórico
  conta.historicoTransacoes.splice(indice, 1);

  // Estorna o valor da transação para o saldo
  conta.saldo += transacao.valor;

  // Subtrai do total transferido hoje
  conta.totalTransferidoHoje -= transacao.valor;

  // Subtrai do total transferido para a chave
  conta.totalPorChave[transacao.chavePix] -= transacao.valor;

  console.log("Transação cancelada com sucesso.");
}

// Enviando alguns Pix
enviarPix("chave1@pix.com", 3000, "Pagamento de serviço");
enviarPix("chave2@pix.com", 5000, "Compra de equipamento");
enviarPix("chave1@pix.com", 2000, "Outro pagamento");

// Mostrando estado atual
console.log("\nEstado da conta:");
console.log(JSON.stringify(conta, null, 2));

// Cancelando a transação 1 (índice 1)
cancelarPix(1);

// Mostrando estado após cancelamento
console.log("\nEstado da conta após cancelamento:");
console.log(JSON.stringify(conta, null, 2));

