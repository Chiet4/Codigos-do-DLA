
function obterDiaDaSemana(a){
    let dia = ''
    switch(a){
        case 1:
            dia = 'Domingo.'
            break
        case 2:
            dia = 'Seguda-feira.'
            break
        case 3:
            dia = 'Terça-feira.'
            break
        case 4:
            dia = 'Quarta-feira.'
            break
        case 5:
            dia = 'Quinta-feira.'
            break
        case 6:
            dia = 'Sexta-feira.'
            break
        case 7:
            dia = 'Sábado.'
            break
        default:
            dia = 'Dia inválido!'
    }
    return dia
}

console.log(obterDiaDaSemana(1))
console.log(obterDiaDaSemana(4))
console.log(obterDiaDaSemana(7))
console.log(obterDiaDaSemana(5))
console.log(obterDiaDaSemana(10))
