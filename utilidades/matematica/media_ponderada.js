

// Calcular a média ponderada

const mean = (numeratorsBox, numeratorsWeightBox) => {
  let numeratorsAndDenominators = 0
  let denominatorsSum = 0
  
  numeratorsBox.forEach((numerator, i) => {
    numeratorsAndDenominators += numerator * numeratorsWeightBox[i]
  })
  
  numeratorsWeightBox.forEach(denominator => {
    denominatorsSum += denominator
  })
  
  const mean = numeratorsAndDenominators / denominatorsSum
  
  return {
    'numerators': numeratorsAndDenominators,
    'denominators': denominatorsSum,
    'mean': mean
  }
}

console.log(mean([8.7, 7.7, 7.2], [5, 3, 1]))
