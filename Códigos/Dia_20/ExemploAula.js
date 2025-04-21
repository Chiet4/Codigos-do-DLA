// Busca linear

let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Junior", "Afonso"];

function buscaLinear(lista, valor) {
    for ( let i = 0; i < lista.length; i++){
        if(lista[i] === valor){
            return i;
        }
    }
    return -1;
}

console.log(buscaLinear(nomes, "Junior"));

function buscaLinearRecursiva(lista, valor, indice = 0){
    if (indice >= lista.length) return -1;

    if (lista[indice] === valor) return indice;

    return buscaLinearRecursiva(lista, valor, indice + 1);
}

console.log(buscaLinearRecursiva(nomes, "Afonso"))