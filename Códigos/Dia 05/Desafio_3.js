console.log('Cálculo de juros')

let valorInicial = 100
let valorInvestido = valorInicial
let jurosAno = 0.05
let dobro = valorInvestido*2
let tempo = 0

while(valorInvestido <= dobro){
    valorInvestido += valorInvestido * jurosAno
    tempo++
}

console.log(`Leva ${tempo} anos para que o investimento dobre.`)
console.log(`Foi investido ${valorInicial} reais e ao final do periodo, o valor final do redimento é R$${valorInvestido.toFixed(2)}.`)