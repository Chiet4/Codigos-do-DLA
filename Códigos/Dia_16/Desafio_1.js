// Playlist de Músicas em um App

let Playlist = []

// adicionar musica a playlist
function adicionarMusica(musica){
    Playlist.unshift(
        {
            nome: musica.nome,
            artista: musica.artista,
            tempo: musica.tempo,
            reproducoes: 0
        }
    )
    console.log(`Múscia ${musica.nome} adicionada a playlist.`)
}

// Mostrar a playlist
function mostrarPlaylist(){
    if(!Playlist.length){
        console.log('A playlist está vazia.')
        return
    }

    Playlist.forEach((musica, i) => {
        console.log(`${i + 1}. ${musica.nome} - ${musica.artista} | ${musica.tempo} | ${musica.reproducoes} reproduções.`)
    })
}

// tocar uma música especifica
function tocarMusica(nome){
    const musica = Playlist.find(m => m.nome === nome)
    if (musica){
        musica.reproducoes++
        console.log(`Tocando: ${musica.nome} - ${musica.artista}`)
    } else {
        console.log('Música não foi encotrada na playlist.')
    }
}

// remover uma música especifica
function removerMusica(nome) {
    const posicaMusica = Playlist.findIndex(m => m.nome === nome)
    if (posicaMusica !== -1){
        Playlist.splice(posicaMusica, 1);
        console.log(`Música "${nome}" removida da playlist.`)
    } else {
        console.log('Música não foi encotrada na playlist.')
    }

}

// tocar toda a playlista
function tocarPlaylist() {
    if (Playlist.length === 0){
        console.log('Playlist vazia.')
        return
    } 

    console.log('Tocando playlist completa: ')
    Playlist.forEach(musica => {
        musica.reproducoes++
        console.log(`${musica.nome} - ${musica.artista} | ${musica.tempo}`)
    })
}

// mover música para determinada posição
function moverMusica(nome, novaPosicao) {
    const posicaMusica = Playlist.findIndex(m => m.nome === nome)
    if (posicaMusica === -1){
        console.log("Música não encotrada.")
        return
    }

    if (novaPosicao < 0 || novaPosicao >= Playlist.length){
        console.log("Posição passada inválida.")
    }

    const [musica] = Playlist.splice(posicaMusica, 1)
    Playlist.splice(novaPosicao, 0, musica)
    
    console.log(`Música "${nome}" movida para a posição ${novaPosicao + 1}`)
}


adicionarMusica({ nome: "Let it Be", artista: "The Beatles", tempo: "4:03" });
adicionarMusica({ nome: "Imagine", artista: "John Lennon", tempo: "3:02" });
adicionarMusica({ nome: "Bohemian Rhapsody", artista: "Queen", tempo: "5:55" });

mostrarPlaylist();

tocarMusica("Imagine");

mostrarPlaylist();

removerMusica('Let it Be');

mostrarPlaylist();

tocarMusica('Bohemian Rhapsody')

tocarPlaylist();

adicionarMusica({nome: "Aurora", artista: "Joe Kinni", tempo: "3:44"});
adicionarMusica({nome: "The Last of Us", artista: "Gustavo Santaolalla", tempo: "3:03"});

mostrarPlaylist();

moverMusica("Imagine", 0)

mostrarPlaylist()

tocarPlaylist();