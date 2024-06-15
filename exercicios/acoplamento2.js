/*Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.*/

let numero = Number (prompt('Insira um valor negativo ou positivo:'))

if (numero > 0) {
    alert(`O valor ${numero} é positivo`)
} else {
    if (numero == 0) {
        alert('O valor é zero')
    } else{
        alert(`O valor ${numero} é negativo`)
    }
}