// como uma pilha funciona

let deck = [];

function adionarCarta(carta){
    deck.push(carta)
    console.log(`Carta ${carta} adicionada ao deck.`)
}

function jogarCarta(){
    if(deck.length === 0){
        return null
    }
    const cartaJogada = deck.pop()
    console.log(`Carta ${cartaJogada} jogada.`)
    return cartaJogada
}

// Acionando algumas cartas
adionarCarta('Ás de Espadas')
adionarCarta('Rei de Copas ')
adionarCarta('Dama de Paus')

jogarCarta()