
// atividades para somar
console.log("------------------------- Para Soma ----------------------------")

let pts_totais = 12;

let hrs_tr_semanas = 0;

let total_salarios = 0;

// 1
console.log(
  'Jogo de tiro ao alvo, você acertou um tiro critico! Pontuação mais 12!'
);
pts_totais += 12;

// 2
let segunda = 6;
let terca = 7;
let quarta = 9;
let quinta = 4;
let sexta = 8;

hrs_tr_semanas = segunda + terca + quarta + quinta + sexta;

console.log(
  'Quantidade de horas trabalhadas na semana foi de: ' + hrs_tr_semanas
);

// 3

let s_p1 = 1453;
let s_p2 = 2500;
let s_p3 = 3423;

total_salarios = s_p1 + s_p2 + s_p3;

console.log('A soma do salários dos 3 membros da casa é: ' + total_salarios);


console.log("\n------------------------- Para Subtração -----------------------")
console.log('1.Calculo de fatura e limite.')
let compra_1 = 1234
let compra_2 = 640
let fatura = compra_1 + compra_2
let limite_credito = 2500
console.log('O seu limite de credito é de R$'+limite_credito+ ',00' ) 
limite_credito -= fatura
console.log('Há duas compras no seu cartão no valor de R$' + compra_1 + ',00 e R$' + compra_2 + ',00. \nO seu limite fica: R$'+limite_credito+",00")
console.log('Sua fatura é R$'+fatura+',00.')
console.log('Uma compra será estornada no valor de R$' + compra_2 +',00!')
limite_credito += compra_2
console.log('Valor da fatura corrigida após o estorno, sua fatura atual é de R$' + limite_credito + ",00")

console.log('\n\n2.Calculo de idade a parte de dois valores.\n')

let ano_n = 2000
let ano_atu= 2025
let idade = ano_atu - ano_n
console.log('O ano de nascimento é '+ano_n + ' e ano atual é '+ano_atu)
console.log('A sua idade é '+ idade)

console.log('\n3.Jogo de gasto de moedas.')

let moedas_t = 1000
let artefato_1 = 120
let artefato_2 = 40
let artefato_3 = 300

console.log('Quantidade de moedas atual: ' + moedas_t)
console.log('Quantidade de compras por artefatos: \nArtefato 1 = '+2+ '\nArtefato 2 = '+4 + '\nArtefato 3 = '+1 )

let compras = (artefato_1 * 2) + (artefato_2 * 4) + (artefato_3 * 1)
moedas_t -= compras
console.log('Quantidade de total de moedas: '+ moedas_t)

console.log("\n------------------------- Para Multiplicação -----------------------")
console.log('1.Compras de produtos')

let produto_1 = 12
let produto_2 = 43

console.log('O valor do produto_1 é R$'+produto_1+',00 e do produto 2 é R$'+produto_2 + ',00.')
let valor_t = (12*2) + (43*2)
console.log('O total da compra para duas unidades dos produtos é R$' + valor_t +',00.')


console.log('\n\n2.Calculo da área do retângulo')

let b = 23
let h = 12
let a = b * h

console.log('O valor da área para um retângulo de base '+b+' e altura de '+h+ ' é de '+a)

console.log('\n\n3.Calculo de horas trabalhadas')

let horas_tr = 160
let valor_htr = 13
let s = horas_tr * valor_htr 

console.log('O valor a receber por trabalhar '+horas_tr+ ' horas é de R$'+s+',00')

console.log("\n\n------------------------- Para Divisão -----------------------")
console.log('1.Media de notas')

let n1 = 8.9
let n2 = 5.5
let n3 = 9.0
let n4 = 10.0
let media = (n1+n2+n3+n4)/4
console.log('A média das notas é '+media)

console.log('\n2.Metros para km')
let m = 500
let km = m/1000
console.log(m + ' metros convertido para km é ' + km)

