

// OBS: Pode ser usado somente "max.length" caso o índice mínimo seja 0
// OBS: Quando o índice mínimo não for 0, é recomendado usar "min" como parâmetro
function randomInteger({min, max}) {
  return Math.floor(Math.random() * (max - min))
}

let properties = ['left', 'center', 'right']

// Usando a função 10 vezes
for(let i = 0; i < 10; i++) {
  let index = randomInteger({min: 0, max: properties.length})
  console.log(properties[index])
}

// Exemplo p/ explicar "min"
let amounts = [...Array(11).keys()]

for (let i = 0; i < 100; i++) {
  // Há uma subtração entre "max=10" e "min=7"
  // Tradução: Pegar de "amounts", índices do 0 ao 3 (resultado da subtração)
  console.log(amounts[randomInteger({min: 7, max: amounts.length})])
}
