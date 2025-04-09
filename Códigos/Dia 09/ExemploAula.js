
const redesSociais = [
    'Instagram',
    'YouTube',
    'Facebook',
    'TikTok',
    'Twitter',
    'LinkedIn',
    'Pinterest'
];

// encotra a posição especifica de um elemento, caso contrario retorna -1
const encontrarPosicao = redesSociais.indexOf('TikTok');
console.log(encontrarPosicao)

// procura elemento dentro de um array, se existe retorna true do contrario false
const encotrarElemento = redesSociais.includes('Threads');
console.log(encotrarElemento)