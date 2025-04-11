console.log('Controle de Navegação em Navegador Web');

let pilhaVoltar = [];
let pilhaAvancar = [];
let paginaAtual = 1;

function navegar(novapagina) {
  pilhaVoltar.push(paginaAtual);
  paginaAtual = novapagina;
  pilhaAvancar = [];
  console.log(`Navegando para: ${paginaAtual}`);
}

function voltar() {
  if (pilhaVoltar.length > 0) {
    pilhaAvancar.push(paginaAtual);
    paginaAtual = pilhaVoltar.pop();
    console.log(`Voltando para: ${paginaAtual}`);
  } else {
    console.log(`Sem páginas para voltar.`);
  }
}

function avancar() {
  if (pilhaAvancar.length > 0) {
    pilhaVoltar.push(paginaAtual);
    paginaAtual = pilhaAvancar.pop();
    console.log(`Avançando para: ${paginaAtual}`);
  } else {
    console.log(`Sem páginas para voltar.`);
  }
}

navegar('pagina1');
navegar('pagina2');
navegar('pagina3');
voltar();
voltar();
avancar();
navegar('pagina5');
