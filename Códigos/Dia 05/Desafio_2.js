console.log('Contagem regressiva para lançamento de foguete.')


for ( let tempo = 10; tempo >= 0; tempo-- ){
    
    if (tempo <= 3 && tempo > 0){ 
        console.log(tempo + ' Atenção!')
    }
    else{
        console.log(tempo)
    }
}

console.log('\nLançamento do foguete!')
