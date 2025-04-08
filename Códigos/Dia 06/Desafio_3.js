console.log('Rendimento de aplicação financeira, com function')

function calcularInvestimento(valorInvestido, taxaJuros, anosInvestidos){
    
    for (let ano = 1; ano <= anosInvestidos; ano++){
        valorInvestido += valorInvestido * taxaJuros
        console.log(`No final do ano ${ano}, o valor investido será de R$${valorInvestido.toFixed(2)}.`)
    }

}

let valor = 1000
let taxaJuros = 0.12
let anosInvestidos = 10 

calcularInvestimento(valor, taxaJuros, anosInvestidos)