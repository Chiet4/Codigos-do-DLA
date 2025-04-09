
console.log('Fila somente com um caixa!')
let caixa1 = []

function addCliente(nome, idade){
    let pessoa = {
        nome: nome,
        idade: idade
    }
    caixa1[caixa1.length] = pessoa // forma manual de colocar elementos no array
}

function atenderCliente(){
    if (caixa1.length === 0){
        console.log("Caixa vazio! Todos os clientes foram atendidos.")
        return
    }

    let atendido
    // procurar o primeiro cliente com mais de 60 anos de idade
    let prioridade = caixa1.findIndex(pessoa => pessoa.idade > 60)

    if(prioridade !== -1){
        atendido = caixa1.splice(prioridade,1)[0]
    } else {
        atendido = caixa1.shift()
    }

    console.log(`Atendendo: ${atendido.nome}`)

}

addCliente('João', 17)
addCliente('Maria', 22)
addCliente('Pedro', 72)
addCliente('Carlos', 65)
addCliente('Ana', 18)
console.log('Quantidade de clientes no caixa: '+caixa1.length)

atenderCliente()
atenderCliente()
atenderCliente()
atenderCliente()
atenderCliente()
atenderCliente()


