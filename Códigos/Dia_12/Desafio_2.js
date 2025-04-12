
// iniciando fila de atendimento
let filaDeAtendimento = []

// Simulando entrada de clientes na fila
function receberCliente(cliente){
    filaDeAtendimento.push(cliente)
    console.log(`Novo cliente ${cliente} acaba de chegar.`)
}

// Simulando atendimento de clientes
function atenderPedido(){
    if(filaDeAtendimento === 0){
        console.log("Não há clientes na fila!")
    } else {
        let clienteAtendido = filaDeAtendimento.shift()
        console.log(`Atendendo ${clienteAtendido}. Clientes em espera: ${filaDeAtendimento.length}`)
    }
}

// Verificando o andamento da fila
function estadoFila(){
    console.log(`Clientes presentes na fila: ${filaDeAtendimento.length}`)
    if (filaDeAtendimento > 0){
        console.log("Clientes esperando: " + filaDeAtendimento.join(", "))
    }
}

receberCliente('João')
receberCliente('Casio')
receberCliente('Pedro')
receberCliente('Carlos')
receberCliente('Vitoria')

estadoFila()

atenderPedido()
atenderPedido()
atenderPedido()

receberCliente('Maria')

atenderPedido()

estadoFila()

atenderPedido()
atenderPedido()
