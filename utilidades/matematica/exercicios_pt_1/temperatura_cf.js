

// problema 20
// Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

let input = require('readline-sync')

// Entrada
let celsiusTemp = Number(input.question('Digite um valor em temperatura celsius ---> '))

// Processamento
let adittionalTemp = 160
let celsiusToFahrenheit = (9 * celsiusTemp + adittionalTemp) / 5

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + celsiusTemp + '°C equivale a ' + celsiusToFahrenheit.toFixed(1) + '°F\n'

console.log(report)
