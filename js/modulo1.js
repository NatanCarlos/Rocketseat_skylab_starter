
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

// função que "escuta" o click no botão, ao clicar, alerta o retorno da função
botaoRetornarEndereco.onclick = function (){
    Swal.fire({
        icon: 'success',
        title: 'Resposta',
        text: retornarEndereco (),
    });     
}
// FIM DO EXERCICIO 1  


// EXERCÍCIO NÚMERO 2

function pares(x, y) {
    
    var lista_pares = [];

    var i = x;
    while (i <= y){

        if(i % 2 == 0){
            lista_pares.push(i);
        }

        i++;
    }

    console.log(lista_pares);

    return lista_pares;
}   

var botaoCalculaPares = document.querySelector("#calcularPares");
botaoCalculaPares.onclick = function (){
    var numeroInicio    = parseFloat( document.querySelector("#numeroInicio").value );
    var numeroFim       = parseFloat( document.querySelector("#numeroFim").value    );

    if(isNaN(numeroInicio) || isNaN(numeroFim)){
        Swal.fire({
            icon: 'error',
            title: 'Atenção',
            text: 'Os dados informados não parecem corretos',
        }); 
        return false;
    }

    var lista_pares = pares(numeroInicio, numeroFim);
    var string_resposta = '';

    for (let index = 0; index < lista_pares.length; index++) {
        const numero = lista_pares[index];

        string_resposta += (index < lista_pares.length && index > 0 ) ? ',' : '';

        string_resposta += numero;
    }

    //for (numero in lista_pares) {
        //string_resposta += numero + ',';        
    //}

    Swal.fire({
        icon: 'success',
        title: 'Números pares entre ' + numeroInicio + ' e ' + numeroFim + ':',
        text: string_resposta,
    }); 
}