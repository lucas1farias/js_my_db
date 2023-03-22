

// problema 6
// Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

let input = require('readline-sync')

// Entrada
let speed = Number(input.question('Digite um valor de velocidade em (km/h) ---> '))

// Processamento
let conversion = 3.6
let formula = (speed / conversion).toFixed(2)

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + speed + ' km/h = ' + formula + ' m/s\n'

console.log(report)
