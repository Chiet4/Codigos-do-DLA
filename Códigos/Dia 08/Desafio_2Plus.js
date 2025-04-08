console.log('Fila com mais de um caixa')

let caixa1 = []
let caixa2 = []
let caixa3 = []

function adicionarCliente(nome, idade, condicao, compras){
    let pessoa = {
        nome: nome,
        idade: idade,
        compras: compras,
        condicao: condicao
    }
    if( idade > 60 && condicao === 'idoso' || condicao === 'gestante'){
        caixa3.push(pessoa)
    }else if (compras > 10){
        caixa2.push(pessoa)
    }else {
        caixa1.push(pessoa)
    }
}

function atenderClientes(){
    function atenderCaixa(caixa, nome){
        if(caixa.length > 0){
            let cliente = caixa.shift() 
            console.log(`Atendendo em ${nome}: Cliente ${cliente.nome} ${cliente.condicao || 'sem condição especial'}, com ${cliente.compras} volumes.`)
        }else {
            console.log(`${nome}: Nenhum cliente na fila!` );
        }
    }

    atenderCaixa(caixa3, 'Caixa 3 Preferencial')
    atenderCaixa(caixa2, 'Caixa 2 Atacado')
    atenderCaixa(caixa1, 'Caixa 1 Normal')
}

adicionarCliente('João', 17, 'idoso', 23)
adicionarCliente('Maria', 22, '', 40)
adicionarCliente('Pedro', 72, 'idoso', 7)
adicionarCliente('Carlos', 65, 10)
adicionarCliente('Ana', 18, '', 5)
console.log('Quantidade de clientes nos caixas: '+(caixa1.length + caixa2.length + caixa3.length) )

atenderClientes()
atenderClientes()
console.log('Quantidade de clientes nos caixas: '+(caixa1.length + caixa2.length + caixa3.length) )
