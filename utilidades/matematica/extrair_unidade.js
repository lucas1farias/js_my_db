

// Extrai a parte da UNIDADE de um número de 3 dígitos

const getUnitDigit = (threeDigitValue) => {
  const hundredLeftover = threeDigitValue % 100
  const unit = hundredLeftover % 10
  return unit
}

const report = [
  getUnitDigit(101), getUnitDigit(102), getUnitDigit(103), getUnitDigit(104), getUnitDigit(105), 
  getUnitDigit(106), getUnitDigit(107), getUnitDigit(108), getUnitDigit(109) 
]

report.forEach(i => {
  console.log(i)
})
