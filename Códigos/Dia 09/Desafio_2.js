
function extrairPorcao(array, inicio =0, fim=array.length){
    let n_array = []
    for(let i = inicio; i < fim; i++){
        n_array.push(array[i])
    }
    return n_array
}

const frutas = [
    'maçã',
    'banana',
    'pera',
    'cajá',
    'manga',
    'maracujá',
    'mamão'
];

let sacola = extrairPorcao(frutas, 2, 5)

console.log(`Na sua sacola de comprar tem: ${sacola.join(', ')}`)