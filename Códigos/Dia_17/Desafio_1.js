// Ordenação: organizando a bagunça

const produtos = [
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

function organizarPorPreco(){
    let n = produtos.length;

    for (let i = 0; i < n - 1; i++){
        let minIndex = i;

        for (let j = i + 1; j < n; j++){
            if(produtos[j][1] < produtos[minIndex][1]){
                minIndex = j;
            }
        }
        let temp = produtos[i];
        produtos[i] = produtos[minIndex]
        produtos[minIndex] = temp;
    }
    return produtos;
}

const listaOrdenada = organizarPorPreco(produtos);

for (let i = 0; i < listaOrdenada.length; i++) {
    console.log(`Produto: ${listaOrdenada[i][0]} - R$ ${listaOrdenada[i][1].toFixed(2)}`);
}