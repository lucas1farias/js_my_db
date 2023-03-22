

// Criar intervalos de tempo entre ações

function randomPrint() {

  let numbers = [...Array(100).keys()]
  let value = undefined

  let loop = setInterval(() => {

    let waitFor = [500, 1000, 1500, 2000]
    let index = Math.floor(Math.random() * numbers.length - 0)
    let thisMuch = Math.floor(Math.random() * waitFor.length - 0)
    value = numbers[index]
    
    setTimeout(() => {
      console.log(value)
      // Tornar o intervalo entre prints aleatório
    }, waitFor[thisMuch])
    
    // Ponto de parada
    if(value % 5 === 0) {
      clearInterval(loop)
    }
  }, 1000)
}

randomPrint()
