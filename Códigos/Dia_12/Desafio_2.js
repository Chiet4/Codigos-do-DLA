// De inicio eu pensei somente em entrada de cliente, mas como é uma simulação de DriveThru precisa passar mais informação
// Sendo placa de carro e pedido

// iniciando fila de atendimento
let filaDeAtendimento = []

// Simulando entrada de clientes na fila
function receberCliente(placaDoCarro, pedido){
    filaDeAtendimento.push([placaDoCarro, pedido])
    console.log(`Carro ${placaDoCarro} entrou na fila com o pedido: ${pedido}.`)
}

// Simulando atendimento de clientes
function atenderPedido(){
    if(filaDeAtendimento.length === 0){
        console.log("Não há clientes na fila!")
    } else {
        let clienteAtendido = filaDeAtendimento.shift()
        console.log(`Atendendo ${clienteAtendido[0]}. Com o pedido: ${clienteAtendido[1]}.`)
    }
}

// Verificando o andamento da fila
function estadoFila(){
    console.log(`Clientes presentes na fila: ${filaDeAtendimento.length}`)
    if (filaDeAtendimento > 0){
        console.log("Fila atual: " + filaDeAtendimento.map(carro => carro[0]).join(", "));
    }
}

receberCliente('AB23TG', 'Café')
receberCliente('CJG342', 'Hamburgue')
receberCliente('CN0923', 'Café expresso')
receberCliente('VP9O56', 'Rosquinha')
receberCliente('DF092I', 'Suco')


atenderPedido()
atenderPedido()
atenderPedido()

receberCliente('WE30T8', 'Pão Arabe')

atenderPedido()

estadoFila()

atenderPedido()
atenderPedido()
