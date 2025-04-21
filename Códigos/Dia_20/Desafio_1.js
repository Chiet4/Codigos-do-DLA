// Busca binaria recursiva

function buscaBinariaRecursiva(lista, valor, inicio = 0, fim = lista.length -1){
    if (inicio > fim) return -1;

    let meio = Math.floor((inicio + fim)/ 2)

    if (lista[meio] === valor) return meio;
 
    if (lista[meio] > valor) return buscaBinariaRecursiva(lista, valor, inicio, meio - 1);
    
    return buscaBinariaRecursiva(lista, valor, meio + 1, fim);
}

let numeros = [1, 2, 33, 45, 34, 3, 6, 21, 23, 43, 45, 13, 12];
numeros.sort((a, b) => a - b); // Ordenda os números em ordem crescente
console.log(buscaBinariaRecursiva(numeros, 21));

let nomes = ["Joa", "Grazi", "Bia", "Carlos", "Ana"];
nomes.sort(); // Ordena em ordem alfagética 
console.log(buscaBinariaRecursiva(nomes, "Grazi"));