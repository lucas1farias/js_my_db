

// Criar conjuntos de números seguidos

// Caso queria um range iniciando do zero
// O valor é não incluso (par - 1)
let numbers = [...Array(10).keys()]
console.log(numbers)

// Caso queira que o range não venha com o zero como primeiro índice
numbers.splice(0, 1)
console.log(numbers)

// Caso queira um range com valores específicos (poderia ser "function")
range = ({min, max}) => {
  return Array.from({length: max - min + 1}, (value, key) => key + min)
}

let oneRange = range({min: 3, max: 7})
console.log(oneRange)
