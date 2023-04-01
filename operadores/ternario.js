

// Versão JS do list comprehension Python
// Encurtador de expressões

// Os consoles abaixo são o equivalente em Python: ['sim' if 34 % 17 == 0 else 'não']
// (34 % 17 === 0 ? 'sim' : 'não') = (if ? retorno if : retorno else)
console.log(`34 é divisível por 17? ${(34 % 17 === 0 ? 'sim' : 'não')}`)
console.log(`34 é divisível por 3? ${34 % 3 === 0 ? 'sim' : 'não'}`)

// function isAdult({age}) {
//   /*
//   Forma menos avançada
//   if (age >= 18) {
//     return 'Adulto'
//   } else {
//     return 'Menor de idade'
//   }
//   */

//   // Forma avançada usando o operador ternário ?
//   return age >= 18 ? 'Adulto' : 'Menor de idade'
// }

// console.log(isAdult({age: 17}))
// console.log(isAdult({age: 18}))

let isAdult = age => age >= 18 ? 'Adulto' : 'Menor de idade'
console.log('[DECLARATIVA]', isAdult(18))
console.log('[DECLARATIVA]', isAdult(17))

// OUTRO EXEMPLO
let conditions = [
    // Tratando condições com operador ternário: condição ? if : else
    personChoice == 'pedra' && computerChoice == 'pedra' ? draw : '',
    personChoice == 'papel' && computerChoice == 'papel' ? draw : '',
    personChoice == 'tesoura' && computerChoice == 'tesoura' ? draw : '',
    personChoice == 'pedra' && computerChoice == 'tesoura' ? victory : '',
    personChoice == 'pedra' && computerChoice == 'papel' ? loss : '',
    personChoice == 'papel' && computerChoice == 'pedra' ? victory : '',
    personChoice == 'papel' && computerChoice == 'tesoura' ? loss : '',
    personChoice == 'tesoura' && computerChoice == 'papel' ? victory : '',
    personChoice == 'tesoura' && computerChoice == 'pedra' ? loss : '',
]
                
// Achando a condição que foi satisfeita (!= undefined)
conditions.forEach(condition => {
    if (condition) {
        result.textContent = condition
    }
})
