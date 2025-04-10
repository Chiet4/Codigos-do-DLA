// Primeiro o saldo das contas
let saldoConta1 = 100;
let saldoConta2 = 50;

//limite inicial, juros e configurações de limite
let limite = 0;
let jurosLimite = 0;
const percentualLimite = 0.1;
const saldoMinimoLimite = 1000;

// taxa do dolar
const taxaConvesaoDolar = 5.45;

function saldoTotal() {
  let total = saldoConta1 + saldoConta2;

  if (total >= saldoMinimoLimite) {
    limite = total * percentualLimite;
  }

  return total;
}

function alertaSaldo() {
  if (saldoConta1 <= 0) {
    console.log('Conta 1 está sem saldo ou utilizando o limite.');
  }

  if (saldoConta2 <= 0) {
    console.log('Conta 2 está sem saldo ou utilizando o limite.');
  }
}

function depositar(conta, valor) {
  if (conta == 1) {
    if (saldoConta1 < 0) {
      jurosLimite += valor * 0.15;
      valor *= 0.85;
    }
    saldoConta1 += valor;
  } else if (conta == 2) {
    if (saldoConta2 < 0) {
      jurosLimite += valor * 0.15;
      valor *= 0.85;
    }
    saldoConta2 += valor;
  }
}

function debitar(conta, valor) {
  if (conta === 1 && valor <= saldoConta1 + limite) {
    saldoConta1 -= valor;
  } else if (conta === 2 && valor <= saldoConta2 + limite) {
    saldoConta2 -= valor;
  } else {
    console.log('Saldo insuficiente para o débito na conta ' + conta);
  }
}

function transferir(valor, contaOrigem, contaDestino) {
  if (contaOrigem === 1 && valor <= saldoConta1) {
    debitar(1, valor);
    depositar(contaDestino, valor);
  } else if (contaOrigem === 2 && valor <= saldoConta2) {
    debitar(2, valor);
    depositar(contaOrigem, valor);
  } else {
    console.log(
      'Saldo insuficiente para transferência na conta ' + contaOrigem
    );
  }
}

function converterSaldoParaDolar(conta) {
  if (conta === 1) {
    return saldoConta1 / taxaConvesaoDolar;
  } else if (conta === 2) {
    return saldoConta2 / taxaConvesaoDolar;
  }
}

function exibirLimite() {
  return limite;
}

function exibirJurosLimite() {
  return jurosLimite;
}

console.log('O saldo somando das duas é de: ' + saldoTotal());
alertaSaldo();

depositar(1, 200);
depositar(2, 150);
console.log('O saldo da conta 1 é de: ' + saldoConta1);
console.log('O saldo da conta 2 é de: ' + saldoConta2);
debitar(1, 80);
debitar(1, 45);
console.log('-----Após debitar-----');
console.log('O saldo da conta 1 é de: ' + saldoConta1);
console.log('O saldo da conta 2 é de: ' + saldoConta2);

transferir(300, 1, 2);
console.log('-----Transferir-----');
console.log('O saldo da conta 1 é de: ' + saldoConta1);
console.log('O saldo da conta 2 é de: ' + saldoConta2);

console.log('--Conversão de dolar--');
let Dollaconta1 = converterSaldoParaDolar(1);
let Dollaconta2 = converterSaldoParaDolar(2);
console.log(
  'Valor da conversão do saldo para dollar: US$' + Dollaconta1.toFixed(2)
);
console.log(
  'Valor da conversão do saldo para dollar: US$' + Dollaconta2.toFixed(2)
);

console.log('Limite: ' + exibirLimite());
console.log('Juros de uso de Limite:' + exibirJurosLimite());
