// Com função recursiva

function ordenarRecursivo(lista, index = 0) {
    if (index >= lista.length - 1) return;

    let minIndex = index;

    for (let j = index + 1; j < lista.length; j++) {
        if (lista[j][1] < lista[minIndex][1]) {
            minIndex = j;
        }
    }

    let temp = lista[index];
    lista[index] = lista[minIndex];
    lista[minIndex] = temp;

    // Chamada recursiva para o próximo elemento
    ordenarRecursivo(lista, index + 1);
}

const produtos2 = [
    ["Arroz", 25.99],
    ["Feijão", 12.50],
    ["Leite", 6.49],
    ["Óleo", 8.99],
    ["Pão", 7.00],
    ["Café", 15.30],
    ["Açúcar", 4.89],
    ["Sal", 3.25],
    ["Macarrão", 5.79],
    ["Manteiga", 9.99]
];

ordenarRecursivo(produtos2);

for (let i = 0; i < produtos2.length; i++) {
    console.log(`Produto: ${produtos2[i][0]} - R$ ${produtos2[i][1].toFixed(2)}`);
}
