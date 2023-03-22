

// Quando há 2 pars: número do índice a ser removido, qtd. a ser removida
// Quando há 3 pars: número do índice a ser substituído, qtd. a ser removida, dado

let numbers = [...Array(5).keys()]
// Havendo 3 parâmetros ou +, se par2 for > de 1, temos peculiaridades
// Com par2 == 1: [ 'void', 1, 2, 3, 4 ]
// Com par2 > 1: [ 'void', 2, 3, 4 ]
// É notado que se perde 1 índice. Qual a razão disso?
// Se "par2 > 1" (ex: 2) ao invés de 3 pars, é preciso 4
// Se "par2 > 1" (ex: 3) ao invés de 3 pars, é preciso 5
numbers.splice(0, 1, 'void')

console.log(numbers)
numbers.splice(0, 1)
console.log(numbers)
numbers.splice(3, 1)
console.log(numbers)

// Quando par2 > 1, é preciso adicionar mais parâmetros ao final         
// ex_1: numbers2.splice(0, 1, 'a')                -----> ['a', 1, 2, 3, 4]       
// ex_2: numbers2.splice(0, 2, 'a', 'b')           -----> ['a', 'b', 2, 3, 4]       
// ex_3: numbers2.splice(0, 3, 'a', 'b', 'c')      -----> ['a', 'b', 'c', 3, 4]          
// ex_4: numbers2.splice(0, 4, 'a', 'b', 'c', 'd') -----> ['a', 'b', 'c', 'd', 4]
// O que acontece? A cada incremento em "par2", é preciso +1 parâmetro
// par2 == 1 (3 pars) / par2 == 2 (4 pars) / par2 == 3 (5 pars)...
// Se par2 aumentar e os parâmetros não, os índices começarão a sumir do dado
let numbers2 = [...Array(5).keys()] 
numbers2.splice(0, 4, 'a', 'b', 'c', 'd')
console.log(numbers2)
