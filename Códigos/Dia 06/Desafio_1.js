
function imc ( peso, altura ){
    return peso / (altura ** 2)
}
let result = imc(84.453, 1.64)
console.log('O seu IMC é', result.toFixed(2));
