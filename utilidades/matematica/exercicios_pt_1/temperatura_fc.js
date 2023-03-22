

// problema 21
// Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

let input = require('readline-sync')

// Entrada
let fahrenheitTemp = Number(input.question('Digite um valor em temperatura fahrenheit ---> '))

// Processamento
let adittionalTemp = 160
let fahrenheitToCelsius = (5 * fahrenheitTemp - adittionalTemp) / 9

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + fahrenheitTemp + '°F equivale a ' + fahrenheitToCelsius.toFixed(2) + '°C\n'

console.log(report)
