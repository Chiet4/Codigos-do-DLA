
const carrosMaisVendidos = [
    'Fiat Strada',
    'Fiat Agro',
    'Hyundai HB20',
    'Chevrolet Onix',
    'Volkswagen Gol',
    'Renault Kwid',
    'Fiat Mobi',
    'Jeep Renegade',
    'Volkswagen T-Cross',
    'Toyota Corolla'
];

// slice é uma função especial que retorna um cópia passando o começo e o fim do array  k
const top5Carros = carrosMaisVendidos.slice(0,5)

console.log('Top 5 Carros Mais Vendidos no Brasil:');
for (let i = 0; i < top5Carros.length; i++){
    console.log(`${i + 1}. ${top5Carros[i]}`)
}