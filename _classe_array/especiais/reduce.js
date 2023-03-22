

/*
    É um loop for com propósito p/ manipular dados de um dado iterável array de alguma forma
    Seu uso mais comum é similar ao sum() de Python
    Ao final do seu uso, pode ser passado um valor inicial, sendo inteiro ou float
*/

// Exemplo 1 -> Progresso: ('111' ... [ '1', '1', '1' ] ... [ 1, 1, 1 ] ... 3)
let number = '111'
let numberArray = [...number] 
numberArray = numberArray.map(Number)
numberArray = numberArray.reduce((indexOdd, indexEven) => indexOdd + indexEven, 0)
console.log('[reduce()]', numberArray)

let grades = [25, 25, 20, 30]
console.log('[reduce()]', grades.reduce((a, b) => a + b, 0))

// ----- EXEMPLO EM FORMA DECLARATIVA -----
let byIndex = (indexInittial, indexNext) => indexInittial + indexNext
console.log('[DECLARATIVO][reduce()]', grades.reduce(byIndex))
