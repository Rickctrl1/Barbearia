//script de visualização de senha

//selecionando os elementos do HTML
const inputSenha = document.getElementById('senha');
const btnSenha = document.getElementById('btn-senha');


//Adicionando evento de clique no botão
btnSenha.addEventListener('click', function(){
    //Verifica qual é o tipo atual do input
    if (inputSenha.type === 'password') {
        //Se for senha, muda para texto (fica visível)
        inputSenha.type = 'text';
    } else {
        //Se for texto, muda de volta para senha (fica oculta)
        inputSenha.type = 'password'
    }
});

