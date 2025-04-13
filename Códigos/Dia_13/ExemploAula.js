// Exemplo de deck e suas funções peculiares

const itens = []

// Inserir no início
function inserirInicio(item) {
    itens.unshift(item);
}

// Inserir no fim
function inserirFim(item){
    itens.push(item);
}

// Remover do início
function removerInicio(){
    return itens.shift();
}

// Remover do fim
function removerFim(){
    return itens.pop();
}

// Obter primeiro elemento - front
function primeiro(){
    return itens[0];
}

// Obter último elemento - rear
function ultimo(){
    return itens[itens.length -1];
}

// Verifica se está vazio - isEmpty
function estaVazio(){
    return itens.length === 0;
}

// Obter itens 
function obterItens(){
    return itens.slice(); // Retorna uma cópia da fila usando o método slice 
}

//  Teste de funções
console.log(estaVazio());

inserirInicio('Ferrari');
inserirInicio('Fusca');
inserirInicio('HB20S');
inserirInicio('Meriva');

console.table(obterItens()); // table - formato tabulado
console.log(estaVazio());

removerInicio();
removerFim();

console.table(obterItens());

console.log(`Primeiro: ${primeiro()}`);
console.log(`Último: ${ultimo()}`);