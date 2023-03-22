

// problema 1
// Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

let input = require('readline-sync')

// Entrada
let speed = Number(input.question('Digite a velocidade em (m/s) ---> '))

// Processamento
let conversion = 3.6
let formula = (speed * conversion).toFixed(2)

// Saída
let title = '\n===== RELATÓRIO =====\n'
let report = title + speed + ' m/s' + ' equivale à ' + formula + 'km/h\n'

console.log(report)
