

// Calcular a ÁREA da circunferência

const getCircleArea = (radius) => {
  const pi = Math.PI
  const diameter = radius ** 2
  const area = pi * diameter
  return {
    'wholeValue': area,
    'shortenedValue': area.toFixed(2)
  }
}

const area = getCircleArea(12)
console.log(area.wholeValue)
console.log(area.shortenedValue)
