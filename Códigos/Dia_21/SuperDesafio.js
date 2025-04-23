
const conta = {
  saldo: 50000,
  limiteDiario: 10000,
  totalTransferidoHoje: 0,
  historicoTransacoes: [],
  totalPorChave: {} // Armazena total transferido por chave Pix
};

function enviarPix(chavePix, valor, mensagem = "", data) {
  // Calcula o total já transferido para essa chave
  if (!conta.totalPorChave[chavePix]) {
    conta.totalPorChave[chavePix] = 0;
  }

  const totalParaEssaChave = conta.totalPorChave[chavePix];
  const limitePermitido = totalParaEssaChave > conta.limiteDiario ? totalParaEssaChave : conta.limiteDiario;

  // Calcula o total transferido hoje (com base no histórico)
  let totalHoje = 0;
  for (let i = 0; i < conta.historicoTransacoes.length; i++) {
    const transacao = conta.historicoTransacoes[i];
    if (transacao.data === data && transacao.tipo === "PIX") {
      totalHoje += transacao.valor;
    }
  }

  // Validações
  if (totalHoje + valor > limitePermitido) {
    console.log(`Limite diário de R$ ${limitePermitido.toFixed(2)} excedido para hoje.`);
    return;
  }

  if (conta.saldo < valor) {
    console.log("Saldo insuficiente.");
    return;
  }

  // Realiza a transferência
  conta.saldo -= valor;
  conta.totalPorChave[chavePix] += valor;

  conta.historicoTransacoes.push({
    tipo: "PIX",
    chavePix,
    valor,
    mensagem,
    data
  });

  console.log(`Pix de R$${valor.toFixed(2)} enviado para ${chavePix} em ${data}.`);
}

function cancelarPix(indiceTransacao, dataTransacao) {
  const transacao = conta.historicoTransacoes[indiceTransacao];

  if (!transacao || transacao.tipo !== "PIX") {
    console.log("Transação inválida para cancelamento.");
    return;
  }

  const { chavePix, valor, data } = transacao;

  // Estorna o valor
  conta.saldo += valor;

  // Atualiza total por chave
  conta.totalPorChave[chavePix] -= valor;

  // Registra o reembolso
  conta.historicoTransacoes.push({
    tipo: "REEMBOLSO",
    chavePix,
    valor,
    mensagem: "Reembolso de Pix",
    data
  });

  console.log(`Pix cancelado. Valor de R$${valor.toFixed(2)} devolvido para a conta.`);
}

// ENVIO DE PIX

enviarPix("chave_vanessa", 4000, "Compra de equipamento", "2025-04-10");
enviarPix("chave_vanessa", 5000, "Serviço", "2025-04-10");
enviarPix("chave_vanessa", 2000, "Extra", "2025-04-10"); // Excederá limite diário

enviarPix("chave_vanessa", 3000, "Nova transação", "2025-04-11"); // Novo dia

// Acumulando para liberar o limite por chave:
enviarPix("chave_gabriel", 6000, "Pagamento 1", "2025-04-12");
enviarPix("chave_gabriel", 5000, "Pagamento 2", "2025-04-12"); // Deve bloquear

enviarPix("chave_gabriel", 10000, "Pagamento 3", "2025-04-13"); // Limite diário (limite da chave agora é 16000)
enviarPix("chave_gabriel", 16000, "Pagamento 4", "2025-04-14"); // Deve passar

console.log("\nSaldo Final:", conta.saldo);
console.log("Histórico de Transações:");
console.table(conta.historicoTransacoes);

console.log("Total por chave:");
console.log(conta.totalPorChave);

// CANCELAMENTO

console.log("\nCancelando a transação 1, 4 e 5:");
cancelarPix(1); // Índice 1 da transação original de Pix
cancelarPix(4); // Índice 4 da transação original de Pix
cancelarPix(5); // Índice 5 da transação original de Pix

enviarPix("chave_gabriel", 16000, "Pagamento 4", "2025-04-15"); // Não Deve passar

console.log("\nSaldo Atual após cancelamento:", conta.saldo);
console.log("Histórico Atualizado:");
console.table(conta.historicoTransacoes);

console.log("Total por chave atualizado:");
console.log(conta.totalPorChave);
