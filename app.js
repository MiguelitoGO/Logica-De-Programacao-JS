alert('Boas vindas ao jogo do numero secreto.')

let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;



//enquanto nao for igual n. secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 10');

    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Parabéns, você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);

    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}