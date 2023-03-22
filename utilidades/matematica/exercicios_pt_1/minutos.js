

// problema 3
// Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

let input = require('readline-sync')

// Entrada
let minute = Number(input.question('Digite um valor em minutos (ex: 1, 12, 24) ---> '))

let minuteValue = 60

// Processamento (forma 1)
let divisionRemainings = parseInt(minute / 60)
let minutesRemainings = minute % minuteValue

// Processamento (forma 2)
let divisionRemainings2 = (minute / minuteValue).toString()[0]
let minutesRemainings2 = (minute - (divisionRemainings2 * minuteValue))

// Processamento (forma 3)
let divisionRemainings3 = Math.floor(minute / minuteValue)
let minutesRemainings3 = minute % minuteValue

// Saída (forma 1)
let title = '\n===== RELATÓRIO =====\n'
console.log(title)

let report = minute + ' minuto(s) = ' + divisionRemainings + 'h:' + minutesRemainings + 'min'
console.log(report)

// Saída (forma 2)
let report2 = minute + ' minuto(s) = ' + divisionRemainings2 + 'h:' + minutesRemainings2 + 'min'
console.log(report2)

// Saída (forma 3)
let report3 = minute + ' minuto(s) = ' + divisionRemainings3 + 'h:' + minutesRemainings3 + 'min' + '\n'
console.log(report3)
