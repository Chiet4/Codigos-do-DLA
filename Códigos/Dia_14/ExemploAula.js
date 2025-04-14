// Estudando um pouco o caso de uso de JSON - JavaScript Object Notation

// Formato 
const variavel = {chave: "valor", chave2: "valor2"}

// Exemplo Real
const cliente = {nome: "João", idade: 30, prioridade: true}

// Exemplo com arrays
const cidade = {bairro1: ["Rua A", "Rua B"], bairro2: ["Rua C", "Rua D"]}

// Iterando pelos bairros
for (let bairro in cidade){
    console.log(`${bairro}: ${cidade[bairro].join(", ")}`)
}

