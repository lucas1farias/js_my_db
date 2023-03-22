

// Converter um valor em KM para seu valor em M

const kilometerToMeter = (kmValue) => {
  const conversion = 1000
  const meterValue = kmValue * conversion
  return meterValue
}

const kilometerToMeterValue = kilometerToMeter(12.13)
console.log(kilometerToMeterValue)
