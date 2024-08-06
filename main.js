const numeroSenha = document.querySelector('.parametro-senha_texto');

let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha_botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    tamanhoSenha -= 1;
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho() {
    tamanhoSenha += 1;
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);

