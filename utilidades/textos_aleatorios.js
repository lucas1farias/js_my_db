

function makeWord({wordLength}) {
  let alphabet = [...'abcdefghijklmnopqrstuvwxyz']
  let word = []
  
  for (let i = 0; i < wordLength; i++) {
    let index = Math.floor(Math.random() * alphabet.length - 0)
    word.push(alphabet[index])
  }
  
  // Converter array p/ string sem deixar espaços ou caracteres
  return word.join('')
}

let wordsLength = [...Array(11).keys()]
for (let i = 0; i < 3; i++) {
  wordsLength.splice(0, 1)
}

let report = []
for (let i = 0; i < 10; i++) {
  let index = Math.floor(Math.random() * wordsLength.length - 0)
  report.push(makeWord({wordLength: wordsLength[index]}))
}

console.log(report.join(' '))
