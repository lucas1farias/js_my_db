

//

const hundredReversed = (threeDigitsNumber) => {
  const hundred = Math.floor(threeDigitsNumber / 100)
  const hundredLeftover = threeDigitsNumber % 100 
  const ten = Math.floor(hundredLeftover / 10)
  const unit = hundredLeftover % 10
  // let hundredReversed = unit + '' + ten + '' + hundred
  const hundredReversed = Number(`${unit}${ten}${hundred}`)
  return hundredReversed
}

console.log(hundredReversed(237))
