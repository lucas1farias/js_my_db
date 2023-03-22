

// Calcular o volume de uma esfera


const getSphereVolume = (radius) => {
  const volume = 4 * Math.PI * (radius ** 3) / 3
  return {
    'wholeValue': volume,
    'shortenedValue': volume.toFixed(2)
  }
}

console.log(getSphereVolume(12).wholeValue)
console.log(getSphereVolume(12).shortenedValue)
