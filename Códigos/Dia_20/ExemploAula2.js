// Busca binaria

function buscaBinaria(lista, valor){
    let inicio = 0;
    let fim = lista.length -1;

    while (inicio <= fim){
        const meio = Math.floor((inicio + fim)/ 2); // floor arredenoda para baixo 

        if (lista[meio] === valor) return meio;
        if (lista[meio] < valor) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1;
}

const lista = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(buscaBinaria(lista, 40));