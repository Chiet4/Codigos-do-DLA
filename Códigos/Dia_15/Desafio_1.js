// Implementação da lista encadeada de um trem

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
    tamanho: 0,

    insertLast: function(elemento){
        let novoNo = criarNo(elemento)
        let atual
        if(this.head == null){
            this.head = novoNo
        } else { 
            atual = this.head
            while(atual.next != null){
                atual = atual.next
            }
            atual.next = novoNo
        }
        this.tamanho++
    },
    searchAt: function(posicao){
        if(posicao >= 0 && posicao <= this.tamanho){
            let no = this.head;
            for(let i = 0; i< posicao && no != null; i++){
                no = no.next
            }
            return no;
        }
        return null
    },
    insertAt: function (posicao, elemento){
        if (posicao >= 0 && posicao <= this.tamanho){
            const node = criarNo(elemento)
            if (posicao === 0){
                const current = this.head
                node.next = current
                this.head = node
            } else {
                const anterior = this.searchAt(posicao -1)
                const current = anterior.next;
                node.next = current
                anterior.next = node
            }
            this.tamanho++
            return true
        }
        return false
    },
    removeAt: function(posicao){
        if(posicao >= 0 && posicao <= this.tamanho){
            const nodeRe = this.head
            if(posicao === 0){
                this.head = nodeRe.next
            } else {
                const anterior = this.searchAt(posicao -1)
                const current = anterior.next
                anterior.next = current.next

            }
            this.tamanho--
            return true
        }
        return false
    },
    indexOf: function(elemento){
        let current = this.head
        for(let i = 0; i < this.tamanho && this.head != null; i++){
            if(current.data === elemento){
                return i
            } else {
                current = current.next
            }
        }
        return -1 
    }, 
    traversal: function() {
        let current = this.head;
        let resultado = '';
    
        while (current != null) {
            resultado += `[${current.data}] -> `;
            current = current.next;
        }
    
        resultado += 'null';
        console.log(resultado)
    }
}


listaEncadeada.insertLast('vagão1')
listaEncadeada.insertLast('vagão2')
listaEncadeada.insertLast('vagão3')
console.log(JSON.stringify(listaEncadeada, null,2))

listaEncadeada.insertAt(1, 'novoVagao')
console.log(JSON.stringify(listaEncadeada, null,2))

listaEncadeada.removeAt(0)
console.log(JSON.stringify(listaEncadeada, null,2))

let result = listaEncadeada.indexOf('vagão3')
console.log(result)

listaEncadeada.traversal()