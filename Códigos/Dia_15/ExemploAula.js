// Lista emcadeada simples
// Usando Objeto Literal

let objeto = {
    chave: "valor1",
    chave: "valor2",
    // ...
};

// Objeto representando uma pessoa
let pessoa = {
    nome: "João",
    idade: 30,
    hobbies: ["ler", "correr"],
    // metodo
    falar: function(){
        console.log("Olá, meu nome é "+ this.nome)
    }
};


// Criando nó da lista encadeada
function criarNo(elemento){
    return {
        data: elemento,
        next: null
    };
}

// Criando a estrutura básica da lista encadeada
let listaEncadeada = {
    head: null,

    insertFirst: function (elemento){
        const novoNo = criarNo(elemento);

        if(!this.head){
            this.head = novoNo;
        } else {
            novoNo.next = this.head;
            this.head = novoNo;
        }
        return elemento;
    } 
};

console.log(listaEncadeada.insertFirst('Locomotiva'))
