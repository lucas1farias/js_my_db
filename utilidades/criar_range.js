

range = ({min, max}) => {
  return Array.from({length: max - min + 1}, (value, key) => key + min)
}

let oneRange = range({min: 12, max: 19})
console.log(oneRange)
