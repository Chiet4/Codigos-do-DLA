
const carrosMaisVendidos = [
    'Fiat Strada',
    'Fiat Agro',
    'Hyundai HB20',
    'Chevrolet Onix',
    'Volkswagen Gol',
    'Renault Kwid',
    'Fiat Mobi',
    'Fiat Agro',
    'Jeep Renegade',
    'Volkswagen T-Cross',
    'Toyota Corolla'
];

const top5Carros = carrosMaisVendidos.slice(0,5)

const encotrarModelo = top5Carros.includes("Hyundai HB20")
console.log(`Há algum carro da marca hyundai? ${(encotrarModelo == true) ? 'Sim' : 'Não'}`)

const posicaoModelo = top5Carros.indexOf('Chevrolet Onix') + 1
console.log(`Em qual posição está o Chevrolet Onix: ${posicaoModelo}`)

const ultimaOcorrecia = carrosMaisVendidos.lastIndexOf('Fiat Agro')
console.log(`A posição do 3° da Fiat no raking geral é: ${ultimaOcorrecia}`)