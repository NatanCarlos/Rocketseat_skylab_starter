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

// variáveis principais
var nomes = ["Diego", "Gabriel", "Lucas"];
var listaNomesHTML = document.querySelector("#listaNomes");
var botaoAdicionar = document.querySelector('#botaoAdicionar');
var inputNome = document.querySelector('#nome');

// quando clica no botão de adicionar, executa a função de adicionar
botaoAdicionar.onclick = function (){
    adicionar ();
}

// quando dá enter no input, também executa a função de adicionar
inputNome.onkeyup = function (e){
    if(e.keyCode == 13){
        adicionar ();
    }
}

// função de adicionar o nome na lista
function adicionar (){

    // se o valor estiver em branco, retorna false
    if(!inputNome.value){
        inputNome.focus();
        return false;
    }

    // adiciona o nome na lista
    nomes.push(inputNome.value);    

    // esvazia o input
    inputNome.value = '';
    inputNome.focus();

    // prenche a lista
    preencheNomes ();
}

// função que preenche a lista
function preencheNomes (){

    // esvazia a lista no html
    listaNomesHTML.innerHTML = '';

    // cria a lista nova no html baseada na lista do js
    var table = document.createElement('table');
    table.setAttribute('class', 'table table-bordered');
    table.setAttribute('style', 'background-color: white;');

    for (nome of nomes){
        
        // pega a posição atual da array
        var posicao = nomes.indexOf(nome);

        // cria uma td para o nome       
        var tdNome = document.createElement('td');
        tdNome.innerHTML = nome;       

        // cria o botão excluir
        var botaoExcluir = document.createElement('a');
        botaoExcluir.setAttribute('href', '#listaNomes');
        botaoExcluir.innerHTML = "X";
        botaoExcluir.setAttribute('onclick', 'deletaNomes(' + posicao + ')');
        botaoExcluir.setAttribute('style','color: red;');

        // cria td e adiciona o botão excluir
        var tdExcluir = document.createElement('td');
        tdExcluir.appendChild(botaoExcluir);
        tdExcluir.setAttribute('style','width: 20px;');

        // cria a li e adiciona o texto e o botão de excluir
        var tr = document.createElement('tr');
        tr.appendChild(tdNome);
        tr.appendChild(tdExcluir);

        // adiciona a li na ul
        table.appendChild(tr);
    }

    // adiciona tudo no html
    listaNomesHTML.appendChild(table);
}

preencheNomes ();
inputNome.focus();

function deletaNomes (posicao){
    nomes.splice(posicao, 1);
    preencheNomes ();
}