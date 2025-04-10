console.log('Braço Mecânico para Empilhar Produtos')

let pilhaAtual = []
let estoqueFinal = []

function verificarCapacidade(array){
    return array.length === 10 ? true : false
}

function empilhar(produto){
    if(verificarCapacidade(pilhaAtual)){
        console.log('Caixa cheia! Enviando para estoque...')
        estoqueFinal.push(pilhaAtual)
        criarNovaPilha()
    }
    pilhaAtual.push(produto)
}

function criarNovaPilha(){
    pilhaAtual = []
}

// simulando 20 produtos na esteira. 
for(let i = 0; i< 20; i++){
    empilhar(`Produto ${i}`)
}

// Após o loop 
if(pilhaAtual.length > 0){
    console.log('Enviando última caixa...')
    estoqueFinal.push(pilhaAtual)
}

