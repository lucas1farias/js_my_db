

// Sintaxe que cria condições "if" alternativas
// Sintaxe "break" não é mandatória, mas é recomendada
// Sintaxe "default" funciona como um "else"

let language = 'js'

switch(language) {
  case 'python':
    console.log('A linguagem é Python')
    break
  case 'C#':
    console.log('A linguagem é C#')
    break
  case 'js':
    console.log('A linguagem é Javascript')
    break
  default:
    console.log('Linguagem não achada')
}

let day = undefined
switch (new Date().getDay()) {
  case 0:
    day = "Sunday"
    break;
  case 1:
    day = "Monday"
    break;
  case 2:
    day = "Tuesday"
    break;
  case 3:
    day = "Wednesday"
    break;
  case 4:
    day = "Thursday"
    break;
  case 5:
    day = "Friday"
    break;
  case  6:
    day = "Saturday"
    break
}
console.log(day)

// Mudar valor para testar condições
let resource = 'html'

switch (resource) {
  // Case múltiplos
  case 'html':
  case 'css':
  case 'js':
    console.log('Recurso front-end')
    break
  default:
    console.log('Recurso back-end')
    break
}
