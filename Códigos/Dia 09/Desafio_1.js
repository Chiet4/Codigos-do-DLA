
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

console.log('Com funções prontas.')

const encotrarModelo = top5Carros.includes("Hyundai HB20")
console.log(`Há algum carro da marca hyundai? ${(encotrarModelo == true) ? 'Sim' : 'Não'}`)

const posicaoModelo = top5Carros.indexOf('Chevrolet Onix') + 1
console.log(`Em qual posição está o Chevrolet Onix: ${posicaoModelo}`)

const ultimaOcorrecia = carrosMaisVendidos.lastIndexOf('Fiat Agro')
console.log(`A posição do 3° da Fiat no raking geral é: ${ultimaOcorrecia}`)

// função para recriar o indexOf
function encotrarElemento(array, elemento){
    for(let i =0; i< array.length; i++){
        if(array[i] === elemento){
            return i
        }
    }
    return -1
}

// função para recriar o includes, loop for uf 
function temElemento(array, elemento){
    for(let item of array){
        if(item === elemento){
            return true
        }
    }
    return false
}

// função que recriar o LastIndexOf 
function ultimoCaso(array, elemento){
    for(let i = array.length -1; i>= 0; i--){
        if(array[i] === elemento){
            return i;
        }
    }
    return -1;
}

console.log('Com funções criadas.')

const encotrarModelo1 = temElemento(top5Carros,"Hyundai HB20")
console.log(`Há algum carro da marca hyundai? ${(encotrarModelo == true) ? 'Sim' : 'Não'}`)

const posicaoModelo2 = encotrarElemento(top5Carros,'Chevrolet Onix')
console.log(`Em qual posição está o Chevrolet Onix: ${posicaoModelo}`)

const ultimaOcorrecia3 = ultimoCaso(top5Carros, 'Fiat Agro')
console.log(`A posição do 3° da Fiat no raking geral é: ${ultimaOcorrecia}`)