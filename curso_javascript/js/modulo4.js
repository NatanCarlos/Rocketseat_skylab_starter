// EXERCÍCIO 1

// pega o input e o botão no HTML
var inputIdade = document.querySelector('#inputIdade');
var btnVerificaIdade = document.querySelector('#btnVerificaIdade');

// pega a div onde o botão e o input estão, pra depois impedir que ele clique várias vezes
var divSubmeteIdade = document.querySelector('#divSubmeteIdade');

// foca no input ao carregar a página
inputIdade.focus();

// ao clicar no botão verifica idade, vai começar
btnVerificaIdade.onclick = function (){

    var idade = inputIdade.value;

    // se a idade for null, em branco ou NaN, retorna false e dá um alerta 
    if(!idade || isNaN(idade)){
        Swal.fire({
            icon: 'error',
            title: 'Atenção',
            text: 'Os dados informados não parecem corretos',
            timer: 1000
        }); 
        return false;
    }

    // executa função checa idade
    checaIdade(idade)
    .then(function() {
        // se entrar no then, usuário tem mais de 18 anos    

        // mostra novamente a div do input e botão
        divSubmeteIdade.style.display  =  'initial';
        
        // mostra a mensagem final
        Swal.fire({
            icon: 'success',
            title: 'Resposta',
            text: 'O usuário é maior de 18 anos',
        }); 

        // foca novamente no input
        inputIdade.focus();  

    })
    .catch(function() {
        // se entrar no catch, o usuário é menor de 18 anos

        // mostra novamente a div do input e botão
        divSubmeteIdade.style.display  =  'initial';     
        
        // mostra uma mensagem do tipo erro
        Swal.fire({
            icon: 'error',
            title: 'Atenção',
            text: 'O usuário tem menos de 18 anos',
        }); 

         // foca novamente no input
        inputIdade.focus();   

    })

    
}



function checaIdade(idade) {

    divSubmeteIdade.style.display  =  'none';

    return new Promise((resolve, reject) => 
        setTimeout(() => idade >= 18 ? resolve() : reject(), 2000)
    )
    
   
}

/*
checaIdade(20)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });
*/