

// problema 11
// Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

let input = require('readline-sync')

// Entrada
let number = Number(input.question('Digite um valor entre 100 a 999 ---> '))

// Processamento
let hundred = Math.floor(number / 100)
let remainings = number % 100 
let ten = Math.floor(remainings / 10)
let unit = remainings % 10
let numbersReversed = unit + '' + ten + '' + hundred

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + 'Inversão do valor ' + number + ': ' + numbersReversed + '\n'
console.log(report)
