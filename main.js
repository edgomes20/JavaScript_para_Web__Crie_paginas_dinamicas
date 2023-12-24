
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento /*!= null*/ && elemento.localName === 'audio'){
        console.log(elemento);

        elemento.play();
    } else{
        alert('Elemento nao encontrado, ou seletor invalido.');
    }
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


    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' ||
        evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        if(evento.code === 'Space' ||
        evento.code === 'Enter'){
            tecla.classList.remove('ativa');
        }
    }



    //console.log(contador);
}

