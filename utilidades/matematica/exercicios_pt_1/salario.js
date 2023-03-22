

// problema 12
// Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

let input = require('readline-sync')

// Entradas
let personSalary = Number(input.question('Digite o valor do salário ---> '))
let percentageRaise = Number(input.question('Valor do ajuste em porcento ---> '))

// Processamento
let personSalaryRaise = personSalary * (percentageRaise / 100)
let personNewSalary = personSalary + personSalaryRaise

// Saída
let title = '\n===== RELATÓRIO ====='
let report = `
${title}
Salário anterior || $ ${personSalary}
Acréscimo        || $ ${personSalaryRaise} (${percentageRaise}%)
Salário novo     || $ ${personNewSalary}
`

console.log(report)
