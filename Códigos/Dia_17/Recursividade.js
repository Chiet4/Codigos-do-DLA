
function multiplicar(n1, n2) {
    if (n1 === 0 || n2 === 0){
        return 0;
    }
    else if (n2 === 1) {
        return n1;
    }
    // Multiplicar atráves da soma com recursividade
    else {
        return (n1 + multiplicar(n1, n2 - 1));
    }
}

var result = multiplicar(5,4);
console.log(result)