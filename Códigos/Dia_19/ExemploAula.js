// Funções recursivas

function fatorial(n) {
    if (n === 0) return 1; 

    return n * fatorial(n - 1); // chamada recursiva.
}

console.log(fatorial(3));


function joao(numero) {
    if(numero <= 0){
        console.log("Fim do atendimento.")
        return;
    }
    if(numero % 2 == 0){
        console.log("João atendeu o número", numero);
        maria(numero - 1);
        return;
    }
    maria(numero);
}

function maria(numero){
    if (numero <= 0){
        console.log("Fim do atendimento.")
        return;
    }
    if (numero % 2 !== 0){
        console.log("Maria atendeu o número ", numero)
        joao(numero - 1)
        return;
    }
    joao(numero)
}

joao(5)