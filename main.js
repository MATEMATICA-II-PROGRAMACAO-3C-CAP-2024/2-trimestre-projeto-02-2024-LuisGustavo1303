const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){
     tamanhoSenha = tamanhoSenha-1;
     numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);
