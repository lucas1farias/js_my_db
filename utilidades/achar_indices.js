

function indexFinder({string, char}) {
  let indexes = []
  Array.from(string).forEach(function(value, i) {
    if (value === char) {
      indexes.push(i)
    }
  })
  return indexes
}

// string
let date = '01/01/2071'
let dashes = indexFinder({string: date, char: '/'})
console.log(dashes)

// string
let person = 'Manoel Freitas Azevedo dos Santos'
let personA = indexFinder({string: person, char: 'a'})
console.log(personA)

// array
let language = [...'Javascript']
let languageCharA = indexFinder({string: language, char: 'a'})
console.log(languageCharA)
