

// Calcular o COMPRIMENTO da circunferência

const getCircleLenght = (radius) => {
  const pi = Math.PI
  const lengthCalculus = pi * (radius * 2)
  return {
    'wholeValue': lengthCalculus,
    'shortenedValue': lengthCalculus.toFixed(2) 
  }
}

const circleLength = getCircleLenght(12)
console.log(circleLength.wholeValue)
console.log(circleLength.shortenedValue)
