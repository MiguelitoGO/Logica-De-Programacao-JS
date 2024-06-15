//1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador1 = 0;

while (contador1 != 10 ) {
    alert(`contando, o loop rodou ${contador1} vezes`)
    contador1++
}

//2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;

while (contador2 >= 0 ) {
    alert(`contando, o loop rodou ${contador2} vezes`)
    contador2--;
}

//3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = prompt("Digite um numero para a contagem regressiva")

while (numero >= 0 ) {
    console.log(numero)
    numero--;
}


