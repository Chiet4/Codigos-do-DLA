console.log('Rendimento de aplicação financeira')

let valorInvestido = 1000
let jurosAno = 0.12
let tempoInvestido = 10

for (let ano = 1; ano <= tempoInvestido; ano++){
    valorInvestido += valorInvestido * jurosAno    
    console.log(valorInvestido)
}

console.log(`O valor final após 10 anos é R$${valorInvestido.toFixed(2)}`)