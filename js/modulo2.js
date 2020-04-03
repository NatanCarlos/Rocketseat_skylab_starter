// EXERCÍCIOS 1 E 2

// função que gera as cores aleatóreas
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var boxesAdicionados = 0;
var limiteBoxes = 60;       // não faz parte do exercício, mas decidi limitar mesmo

// pega o botão
var botaoBox = document.querySelector('#botaoBox');

// quando clicar no botão, vai criar os boxes
botaoBox.onclick = function (){

    // div que vai receber os boxes
    var divQuadrados = document.querySelector('#divQuadrados');

    // cria o box
    var box = document.createElement('div');

    // estiliza o box
    box.style.width             = '100px';
    box.style.height            = '100px';
    box.style.backgroundColor   = "#f00";
    box.style.marginLeft        = "10px";
    box.style.marginBottom      = "10px";

    box.classList.add('col-1');

    // ouvinte pra quando passar o mouse, mudar a cor
    box.addEventListener("mouseover", event => {
        box.style.backgroundColor   =  getRandomColor();
    });

    // limita a quantidade de boxes na tela
    if(boxesAdicionados < limiteBoxes){

        // adiciona o quadrado na lista
        divQuadrados.appendChild(box);

        // incrementa o limite
        boxesAdicionados++;

    }

}

// FIM DOS EXERCÍCIOS 1 E 2


// _____________________________________________________________________________________________________________________________________ //

// EXERCÍCIOS 3 E 4

var nomes = ["Diego", "Gabriel", "Lucas"];

var botaoAdicionar = document.querySelector('#botaoAdicionar');
botaoAdicionar.onclick = function (){
    adicionar ();
}

function adicionar (){

    var nome = document.querySelector('#nome');

    nomes.push(nome.value);

    nome.value = '';

    console.log(nome);

}