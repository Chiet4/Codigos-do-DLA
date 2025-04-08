console.log('Tempo de renovação de CNH')

let idade = 35
let CNH_1 = false // primeira vez

if (CNH_1 == true){
    console.log('O tempo de vencimento de sua carteira é de 1 ano.')
}
else if (idade < 50){
    console.log('O tempo de vencimento de sua carteira é de 10 anos.')
}
else if (idade >= 50 && idade < 70){
    console.log('O tempo de vencimento de sua carteira é de 5 anos.')
}
else {
    console.log('O tempo de vencimento de sua carteira é de 3 anos.')
}
