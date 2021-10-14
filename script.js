
let computador = 0;
let jogador = 0;

function sortear() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    computador = min + Math.trunc(dif * aleatorio);
}

function jogar() {
    let res = document.querySelector('#resultado');
    jogador = Number(window.prompt('Qual é o seu palpite?'));
    if (jogador > computador) {
       res.innerHTML += `<p>O meu número é MENOR!</p>`;
    } else if (jogador < computador) {
        res.innerHTML += `<p>O meu número é MAIOR!</p>`;
    } else {
       res.innerHTML += `<p>Meus parabéns!! Eu tinha sorteado o número ${computador}!</p>`;
        document.getElementById('botao').style.visibility = 'hidden';
    }
}