
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

