

// Extrai a parte da CENTENA de um número de 3 dígitos

const getHundredDigit = (threeDigitValue) => {
  return Math.floor(threeDigitValue / 100)
}

const report = [
  getHundredDigit(100), getHundredDigit(200), getHundredDigit(300), getHundredDigit(400), getHundredDigit(500), 
  getHundredDigit(500), getHundredDigit(600), getHundredDigit(700), getHundredDigit(800), getHundredDigit(900)
]

report.forEach(i => {
  console.log(i)
})
