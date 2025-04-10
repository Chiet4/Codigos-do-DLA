let peso = 84.576;
let altura = 1.64;

let imc = peso / altura ** 2;

console.log('O seu IMC é', imc.toFixed(2));

if (imc < 18.5) {
  console.log('Você está abaixo do peso.');
} else if (imc >= 18.5 && imc < 24.9) {
  console.log('Você está no peso ideal.');
}else if (imc >= 24.9 && imc < 29.9) {
    console.log('Você está com sobrepeso.');
} else {
  console.log(
    'Você está com obesidade!'
  );
}