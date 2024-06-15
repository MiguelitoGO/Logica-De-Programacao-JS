//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaAtual = prompt("Qual é o dia da semana?");

if (diaAtual == 'sabado' || diaAtual == 'domingo') {
alert('bom fim de semana!')
} else {
alert ('Boa semana!')
}


//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = prompt('qual sua pontuacao?')

if (pontuacao >= 100){
alert('parabens, vc venceu!')
} else {
alert('tente novamente para ganhar')
}