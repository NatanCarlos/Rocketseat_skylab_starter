
// EXERCICIO 1

// função que retorna o endereço setado no objeto
function retornarEndereco (){
    
    var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };

    return "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na " + endereco.rua + " com nº " + endereco.numero + ". ";
}

// pega o botão na DOM
var botaoRetornarEndereco = document.querySelector("#retornaEndereco");

// função que escuta o click no botão, ao clicar, alerta o retorno da função
botaoRetornarEndereco.onclick = function (){
    Swal.fire({
        icon: 'success',
        title: 'Resposta',
        text: retornarEndereco (),
    });     
}
// FIM DO EXERCICIO 1  

// _____________________________________________________________________________________________________________________________________ //

// EXERCÍCIO NÚMERO 2

// função que lista os números pares
function pares(x, y) {
    
    // array vazia pra armazenar os pares
    var lista_pares = [];

    // loop entre x e y
    var i = x;
    while (i <= y){

        // verifica se o resto da divisão por 2 é 0, se for, é par, e vai adicionar na array
        if(i % 2 == 0){
            lista_pares.push(i);
        }

        i++;
    }

    return lista_pares;
}   

// função que escuta o click do botão #calcularPares
var botaoCalculaPares = document.querySelector("#calcularPares");
botaoCalculaPares.onclick = function (){

    // pega os valores do formulário
    var numeroInicio    = parseFloat( document.querySelector("#numeroInicio").value );
    var numeroFim       = parseFloat( document.querySelector("#numeroFim").value    );

    // se os inputs type number não estiverem preenchidos, retorna um alerta
    if(isNaN(numeroInicio) || isNaN(numeroFim)){
        Swal.fire({
            icon: 'error',
            title: 'Atenção',
            text: 'Os dados informados não parecem corretos',
        }); 
        return false;
    }

    // cria lista e respota vazios
    var lista_pares = pares(numeroInicio, numeroFim);
    var string_resposta = '';

    // loop na array de respostas pra criar o retorno
    for (let index = 0; index < lista_pares.length; index++) {
        const numero = lista_pares[index];

        // coloca a vírcula no início, se não for o último registro e nem o primeiro
        string_resposta += (index < lista_pares.length && index > 0 ) ? ',' : '';

        string_resposta += numero;
    }

    // alerta o resultado
    Swal.fire({
        icon: 'success',
        title: 'Números pares entre ' + numeroInicio + ' e ' + numeroFim + ':',
        text: string_resposta,
    }); 
}

// FIM DO EXERCÍCIO 2


// _____________________________________________________________________________________________________________________________________ //

// EXERCÍCIO 3


function temHabilidade(skill, lista_skills) {
    var temHabilidade = skills.indexOf(skill);

    //return temHabilidade;

    return (temHabilidade < 0) ? false : true;
}

var skills = ["Javascript", "ReactJS", "React Native"];

var botaoVerificaHabilidade = document.querySelector("#verificaHabilidade");

botaoVerificaHabilidade.onclick = function (){

    var habilidade  =  document.querySelector("#habilidade").value;

    var possuiHabilidade = temHabilidade(habilidade, skills); // true ou false

    if(!habilidade){
        Swal.fire({
            icon: 'error',
            title: 'Atenção',
            text: 'Os dados informados não parecem corretos',
        }); 
        return false;
    }else{

        if(possuiHabilidade){
            Swal.fire({
                icon: 'success',
                title: 'Resposta',
                text: 'O dev possui a habilidade ' + habilidade,
            }); 
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Resposta',
                text: 'O dev NÃO possui a habilidade ' + habilidade,
            }); 
        }
       


    }

}



   







// FIM DO EXERCÍCIO 3

// _____________________________________________________________________________________________________________________________________ //

// EXERCÍCIO 4
function experiencia(anos) {
    
    if(anos <= 1){
        return "Iniciante";
    }else if(anos <= 3){
        return "Intermediário";
    }else if(anos <= 6){
        return "Avançado";
    }else if(anos >= 7){
        return "Jedi Master";
    }
}


var botaoVerificarExperiencia = document.querySelector("#verificarExperiencia");

botaoVerificarExperiencia.onclick = function (){

    var anosDeEstudo = parseFloat( document.querySelector("#anosDeEstudo").value );

    if(isNaN(anosDeEstudo) || anosDeEstudo < 0 ){
        Swal.fire({
            icon: 'error',
            title: 'Atenção',
            text: 'Os dados informados não parecem corretos',
        }); 
        return false;
    }

    var nivel = experiencia(anosDeEstudo);

    Swal.fire({
        icon: 'success',
        title: 'Nivel de experiência do dev: ',
        text: nivel,
    }); 

}

// FIM DO EXERCÍCIO 4


// _____________________________________________________________________________________________________________________________________ //