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


// função que realmente vai chegar a idade
function checaIdade(idade) {

    // oculta a div que tem o botão e o input
    divSubmeteIdade.style.display  =  'none';

    // retorna uma promisse
    return new Promise((resolve, reject) => 
        setTimeout(() => idade >= 18 ? resolve() : reject(), 2000) // dentro de 2 segundos, se for maior de 18 resolve, se não reject
    )    
   
}

// FIM DO EXERCÍCIO 1

// ____________________________________________________________________________________________________________________________________________

// EXERCÍCIO 2

var buscarUsuarioGitHub = document.querySelector('#buscarUsuarioGitHub');   // botao que realiza a busca
var userGitHub          = document.querySelector("#userGitHub");            // input com o nome de usuário
var retornoGit          = document.querySelector("#retornoGit");            // div que contém o retorno

// quando clicar no botão, vai fazer a busca
buscarUsuarioGitHub.onclick = function(){
    
    // Escreve carregando na div 
    retornoGit.innerHTML = 'Carregando...';

    // utiliza o axios pra fazer a requisição no usuário digitado no input
    axios.get('https://api.github.com/users/' + userGitHub.value + '/repos')

        // se der certo, vai processar
        .then(function(response){

            console.log(response);

            // cria o título e a ul da lista
            retornoGit.innerHTML = '<h4>Repositórios: </h4>';
            var ul = document.createElement('ul');

            // faz o loop nos repositórios
            for (repo of response.data) {

                // cria a li e coloca o nome do repositório
                var li = document.createElement('li');
                li.innerHTML = repo.name;
                
                // adiciona na lista
                ul.appendChild(li);
            }
            
            // escreve a ul na div
            retornoGit.appendChild(ul);

        })

        // se der erro, vai tratar
        .catch(function(error){

            console.log(error);

            // escreve o erro na div retorno
            retornoGit.innerHTML = error;

            // faz o sweet alert no erro
            Swal.fire({
                icon: 'error',
                title: 'Ocorreu um erro',
                text: error,
            }); 

        })        

}