// //script de visualização de senha

// //selecionando os elementos do HTML
// const inputSenha = document.getElementById('senha');
// const btnSenha = document.getElementById('btn-senha');


// //Adicionando evento de clique no botão
// btnSenha.addEventListener('click', function(){
//     //Verifica qual é o tipo atual do input
//     if (inputSenha.type === 'password') {
//         //Se for senha, muda para texto (fica visível)
//         inputSenha.type = 'text';
//     } else {
//         //Se for texto, muda de volta para senha (fica oculta)
//         inputSenha.type = 'password'
//     }
// });


// Seleciona todos os botões que têm a classe 'icon-right' (os ícones de olho)
const botoesSenha = document.querySelectorAll('.icon-right');

// Percorre todos os botões encontrados
botoesSenha.forEach(botao => {
    botao.addEventListener('click', function() {
        // Pega o input que está exatamente antes do botão clicado dentro da div
        const inputSenha = this.previousElementSibling;

        if (inputSenha.type === 'password') {
            // Muda para texto (fica visível)
            inputSenha.type = 'text';
            // Troca o ícone de olho cortado para olho aberto
            this.classList.replace('fa-eye-slash', 'fa-eye');
        } else {
            // Muda de volta para senha (fica oculta)
            inputSenha.type = 'password';
            // Troca o ícone de olho aberto para olho cortado
            this.classList.replace('fa-eye', 'fa-eye-slash');
        }
    });
});

// // Seleciona todos os botões que têm a classe 'icon-right'
// const botoesSenha = document.querySelectorAll('.icon-right');

// botoesSenha.forEach(botao => {
//     // Pegamos o input antes de entrar nos eventos para facilitar
//     const inputSenha = botao.previousElementSibling;

//     // 1. Evita que clicar no botão tire o foco do input de senha
//     botao.addEventListener('mousedown', function(event) {
//         event.preventDefault(); 
//     });

//     // 2. Alterna entre mostrar/ocultar ao clicar
//     botao.addEventListener('click', function() {
//         if (inputSenha.type === 'password') {
//             inputSenha.type = 'text';
//             this.classList.replace('fa-eye-slash', 'fa-eye');
//         } else {
//             inputSenha.type = 'password';
//             this.classList.replace('fa-eye', 'fa-eye-slash');
//         }
//     });

//     // 3. NOVO: Oculta a senha automaticamente ao sair do campo
//     inputSenha.addEventListener('blur', function() {
//         inputSenha.type = 'password';
//         botao.classList.replace('fa-eye', 'fa-eye-slash');
//     });
// });
