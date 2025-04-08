console.log('Sistema de PDV')

let tipoProdutos = 'Livros'
let Preco = 89.3
let desconto = 0

switch(tipoProdutos){
    case 'Alimentos':
        desconto = 0.05
        break
    case 'Eletrônicos':
        desconto = 0.10
        break
    case 'Roupas':
        desconto = 0.20    
        break
    case 'Livros':
        desconto = 0.50
        break
    default:
        desconto = 0
}

let valorFinal = Preco * (1 - desconto)
console.log(`O valor final do produto é R$${valorFinal.toFixed(2)}.`);

// [ `` ]  duas crases permitem a concatenação das variaveis com a string, parecido com o python.