alert('Boas vindas ao jogo do numero secreto.')

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto nao for igual n. secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 100');
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;

    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

//Operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//Repare que o codigo abaixo foi substituido pelo operador ternario que resolve a mesmo questão para o sustantivo "tentativa" no singular e plural.
/*if (tentativas > 1){
    alert(`Parabéns, você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Parabéns, você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/
