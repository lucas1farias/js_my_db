

/*
    Mesclar iteráveis array
    Os arrays mesclados não precisam estar no mesmo tamanho
    Pode receber dados extra dentro do método (seguidos de vírgula ou dentro de array)
*/

let people = ['Ana', 'Ena']
let ages = [13, 27, 18]
console.log(people.concat(ages, 9, 'Ina', 'Ona'))
console.log(people.concat(ages, [9, 'Ina', 'Ona']))
console.log(people.concat(ages, 9, ['Ina', 'Ona']))
