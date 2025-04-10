
let valorProduto = 1232
let numeroParcelas = 12 

let valorParcela = valorProduto/ numeroParcelas

for(let i = 1; i <= numeroParcelas; i++){
    valorProduto -= valorParcela
    console.log(`Parcela ${i}: R$${valorParcela.toFixed(2)}.`)
    console.log(`Valor restante a ser pago: R$${valorProduto.toFixed(2)}.`)
}