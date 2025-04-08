let saldoConta = 600
let contaAtiva = false
let podeComprar = (!contaAtiva && saldoConta > 500) ? true : false

console.log(podeComprar)