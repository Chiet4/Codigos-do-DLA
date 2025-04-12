
// Iniciando a fila de chamadas
let filaDeChamadas = []

// Função para receber uma nova chamada
function receberChamada(numeroDeCliente) {
    filaDeChamadas.push(numeroDeCliente); // adiona ao final da fila
    console.log(`Chamada recebida do número: ${numeroDeCliente}. Total de chamadas na fila: ${filaDeChamadas.length}`)
}

// Função para atender a chamama
function atenderChamada(){
    if (filaDeChamadas.length === 0){
        console.log("Não há chamadas na fila para atender.")
    } else {
        let chamadaAtendida = filaDeChamadas.shift();
        console.log(`Atendendo chamada do número: ${chamadaAtendida}.`)
    }
}

// Função para exibir o status da fila
function statusDaFila(){
    console.log(`Total de chamadas na fila: ${filaDeChamadas.length}`)
    if(filaDeChamadas.length > 0){
        console.log("Chamadas esperando: " + filaDeChamadas.join(", "));
    }
}

receberChamada(1234)
receberChamada(5678)
receberChamada(9101)

atenderChamada()

statusDaFila()

atenderChamada()
atenderChamada()