

// Extrai a parte da DEZENA de um número de 3 dígitos

const getTenDigit = (threeDigitValue) => {
  const hundredLeftover = threeDigitValue % 100
  const ten = Math.floor(hundredLeftover / 10)
  return ten
}

const report = [
  getTenDigit(100), getTenDigit(110), getTenDigit(120), getTenDigit(130), getTenDigit(140), 
  getTenDigit(150), getTenDigit(160), getTenDigit(170), getTenDigit(180), getTenDigit(190) 
]

report.forEach(i => {
  console.log(i)
})
