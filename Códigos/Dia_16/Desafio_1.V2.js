// criação de playlist

// funcão para criar uma nova música
function criarMusica(nome, artista, tempo){
    return {
        nome: nome,
        artista: artista,
        reproducoes: 0,
        tempo: tempo
    };
}

// Estrutura da playlist como um Objeto Literal
const playlist = {
    musicas: [],

    // adicionar musica do inicio da playlist
    adicionarMusica: function(nome, artista, tempo) {
        const novaMusica = criarMusica(nome, artista, tempo);

        // criando um novo array e deslocando manualmente as posições
        for(let i = this.musicas.length; i>0; i--){
            this.musicas[i] = this.musicas[i -1]
        }
        this.musicas[0] = novaMusica // nova musica ocupa o indice 0, primeiro

        console.log(`Música "${nome}" adicionada à playlist!`)
    },
    // Remove uma música da playlist (sem usar o findIndex e o splice)
    removerMusica: function(nome){
        let index = -1;

        // Encontramos o índice da música manualmente
        for(let i = 0; i<this.musicas.length; i++){
            if (this.musicas[i].nome === nome){
                index = i;
                break
            }
        }

        if (index === -1 ){
            console.log(`Música "${nome}" não encotrada.`)
            return
        }

        // Desloca os elementos para preencher o espaço
        for(let i = index; i< this.musicas.length -1; i++){
            this.musicas[i] = this.musicas[i +1];
        }

        // Reduzimos o tamanho do array
        this.musicas.length--;
        console.log(`Música "${nome}" removida da playlist.`)
    },

    // Move música sem usar splice
    moverMusica: function(nome, novaPosicao){
        let index = -1;

        // Encontramos a posição original da musica
        for (let i = 0; i < this.musicas.length; i++){
            if (this.musicas[i].nome === nome){
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log(`Música "${nome}" não encotrada.`)
            return
        }

        // Pegamos a música a ser removida
        let musica = this.musicas[index];

        // Deslocando os elementos para preencher o espaço
        for(let i = index; i<this.musicas.length -1; i++){
            this.musicas[i] = this.musicas[i +1];
        }
        this.musicas.length--;

        // Move se os elementos para abri espaço para a nova posição
        for ( let i = this.musicas.length; i > novaPosicao; i--){
            this.musicas[i] = this.musicas[i-1];
        }
        this.musicas[novaPosicao] = musica;
        console.log(`Música "${nome}" movida para posição ${novaPosicao+1}.`)
    },

    // Toca playlist do inicio ao fim
    tocarPlaylist: function(){
        if(this.musicas.length === 0){
            console.log(`A playlist está vazia.`)
            return
        }
        console.log(`Tocando a playlist: `)
        for(let i = 0; i<this.musicas.length; i++){
            this.musicas[i].reproducoes++;
            console.log(`Tocando: ${this.musicas[i].nome} - ${this.musicas[i].artista} (${this.musicas[i].tempo})`);
        }
        
    },
    
    // Toca apenas uma musica especifica
    tocarMusica: function(nome){
        for(let i = 0; i< this.musicas.length; i++){
            if(this.musicas[i].nome === nome){
                this.musicas[i].reproducoes++;
                console.log(`Tocando: ${this.musicas[i].nome} - ${this.musicas[i].artista} (${this.musicas[i].tempo})`)
                return
            }
        }
        console.log(`Música "${nome}" não encontrada.`);
    },

    // Exibe a playlist atual
    mostrarPlaylist: function(){
        if(this.musicas.length ===0){
            console.log(`A playlist está vazia.`)
        } else {
            console.log(`Playlist atual: `);
            for(let i = 0; i<this.musicas.length; i++){
                console.log(`${i + 1}. ${this.musicas[i].nome} - ${this.musicas[i].artista} | Reproduções: ${this.musicas[i].tempo}`)
            }
        }
    }

}

// testando
playlist.adicionarMusica("Let it Be", "The Beatles", "4:03");
playlist.adicionarMusica("Shape for You", "Ed Sheeran", "3:53");
playlist.adicionarMusica("Blinding Lights", "The Weeknd", "3:03");

playlist.mostrarPlaylist();

playlist.tocarMusica("Shape for You");

playlist.tocarPlaylist();

playlist.moverMusica("Blinding Lights", 1);

playlist.removerMusica("Let it Be");

playlist.mostrarPlaylist();