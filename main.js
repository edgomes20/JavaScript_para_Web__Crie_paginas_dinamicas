
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

/*
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
*/

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');


/*
let contador = 0;

// Enquanto
while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // Template String
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    contador++;

    //console.log(contador);
}
*/

// For
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // Template String
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    //console.log(contador);
}

