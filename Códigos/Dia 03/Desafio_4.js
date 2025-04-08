let distancia = 250
let preco_litr = 5.23
let km_lt = 12
let consumo = distancia/km_lt
let valor = consumo*preco_litr

console.log('A quantidade de litros de gasolina necessários para a viagem é de '+ consumo.toFixed(2))
console.log('O valor total a pagar pelos litros de gasolina é de R$'+valor.toFixed(2))