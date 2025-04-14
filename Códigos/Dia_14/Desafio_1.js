console.log('Fila com mais de um caixa')

/*let caixas = {
    caixa1: [],
    caixa2: [],
    caixa3: [],
    caixa4: [],
    caixa5: [],
    caixa6: [],
    caixa7: [],
    caixa8: [],
    caixa9: [],
    caixa10: []
}*/

let caixas = {};
for (let i = 1; i<= 10; i++) {
    caixas['caixa' + i] = [];
}

// caixa com menor fila
function menorFila(identificadores) {
    let menor = identificadores[0];
    for (let id of identificadores) {
        if (caixas[id].length < caixas[menor].length){
            menor = id;
        }
    }
    return menor;
}

function adicionarCliente(nome, idade, condicao, compras){
    let pessoa = {
        nome: nome,
        idade: idade,
        compras: compras,
        condicao: condicao
    }
    if( condicao === 'idoso' || condicao === 'gestante'){
        let caixaEscolhido = menorFila(['caixa1', 'caixa2', 'caixa3'])
        caixas[caixaEscolhido].push(pessoa);
    }else if (compras > 10){
        let caixaEscolhido = menorFila(['caixa4', 'caixa5', 'caixa6', 'caixa7'])
        caixas[caixaEscolhido].push(pessoa);
    }else {
        let caixaEscolhido = menorFila(['caixa8', 'caixa9', 'caixa10'])
        caixas[caixaEscolhido].push(pessoa);
    }
}

function atenderClientes(){
    // itera do 1 ao 10
    for (let i = 1; i<= 10; i++){
        let nomeCaixa = 'caixa' + i

        // verificando se caixa existe e tem clientes
        if (caixas[nomeCaixa] && caixas[nomeCaixa].length > 0){
            // remove o primero cliente
            let cliente = caixas[nomeCaixa].shift();

            console.log(
                `Atendendo no ${nomeCaixa}: Cliente - ${cliente.nome} ` +
                `${cliente.condicao || 'sem condição especial'}, ` +
                `com ${cliente.compras} volumes.`
            );
        } else {
            // caixa vazio
            console.log(`O ${nomeCaixa} está vazio!`);
        }
    }
}

adicionarCliente('João', 65, 'idoso', 8);       
adicionarCliente('Maria', 30, 'gestante', 5);    
adicionarCliente('Carlos', 45, '', 15);         
adicionarCliente('Ana', 28, '', 6);             
adicionarCliente('Lucas', 40, '', 20);          
adicionarCliente('Julia', 25, '', 7);           

atenderClientes();