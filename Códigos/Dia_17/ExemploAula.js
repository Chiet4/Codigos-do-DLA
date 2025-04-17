// Ordenação de dados
// Bubble sort
// Selection sort

function bubbleSort(arr){
    let n = arr.length;
    let trocado;

    do {
        trocado = false;
        for (let i = 0; i < n -1; i++){
            if (arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                trocado = true;
            }
        }

    } while (trocado);

    return arr;
}

function selectionSort(arr){
    let n = arr.length;
    
    // do primeito ao penultimo
    for (let i = 0; i < n - 1; i++){
        let minIndex = i;

        // no proximo item até o fim
        for (let j = i + 1; j < n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
    return arr;
}

console.log(bubbleSort([5,3,8,4,2]));

console.log(selectionSort([6, 9, 3, 1, 5]))