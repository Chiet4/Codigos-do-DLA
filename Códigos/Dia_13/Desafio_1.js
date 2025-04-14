// Controle de Tarefas Dinâmicas com Prioridade

const dequeTarefas = []

// inseri tarefa no começo da lista
function inserirTarefaInicio(tarefa){
 dequeTarefas.unshift(tarefa)
 console.log(`Tarefa '${tarefa}' adicionada com alta prioridade.`)
}

// inseri tarefa no final da lista
function inserirTarefaFim( tarefa){
 dequeTarefas.push(tarefa)
 console.log(`Tarefa '${tarefa}' adicionada com baixa prioridade.`)
}

// Verifica se está vazio - isEmpty
function estaVazio(){
    return dequeTarefas.length === 0
}

// Obter tarefas
function obterTarefas(){
    return dequeTarefas.slice()
}

// remover no inicio, tarefa de alta prioridade.
function removerTarefaInicio(){
    if (!estaVazio()) {
        console.log(`Tarefa '${dequeTarefas.shift()}' com alta prioridade foi removida.`)
    } else {
        console.log("Não há tarefas para remover.")
    }
}

// remover no fim, tarefa de baixa prioridade.
function removerTarefaFim(){
    if(!estaVazio()){
        console.log(`Tarefa '${dequeTarefas.pop()}' com baixa prioridade foi removida.`)
    } else {
        console.log("Não há tarefas para remover.")
    }
}

// Aumento de prioridade de uma tarefa
function aumentarPrioridade(tarefa){
    let index = dequeTarefas.indexOf(tarefa)
    if (index > 0){
        let temp = dequeTarefas[index -1]
        dequeTarefas[index -1] = dequeTarefas[index]
        dequeTarefas[index] = temp
        console.log(`Prioridade de tarefa '${tarefa}' foi aumentada.`)
    } else {
        console.log("A tarefa já está com a máxima prioridade ou não existe.")
    }
}

// Diminuir prioridade de uma tarefa
function diminuirPrioridade(tarefa){
    let index = dequeTarefas.indexOf(tarefa)
    if (index !== -1 && index < dequeTarefas.length -1) {
        let temp = dequeTarefas[index + 1]
        dequeTarefas[index + 1] = dequeTarefas[index]
        dequeTarefas[index] = temp
        console.log(`Prioridade da tarefa '${tarefa}' foi diminuída.`)
    } else {
        console.log("A tarefa já está com a mínima prioridade ou não existe.")
    }
}

// Demonstração do gerenciamneto de tarefas
inserirTarefaFim("Comprar café")
inserirTarefaInicio("Responder e-mails")
inserirTarefaFim("Agendar reunião")

console.log("Tarefas atuais:", obterTarefas())

aumentarPrioridade("Comprar café") // Tentativa de aumento de prioridade
diminuirPrioridade("Responder e-mails") // Diminuir prioridade

console.log("Tarefas após mudança de prioridade:", obterTarefas())

removerTarefaFim();
console.log("Tarefas após remoção:", obterTarefas())