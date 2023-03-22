

// Em JS, verificar se algum dado se encontra em um iterável

let string = 'Javascript'
let array = Array.from(string)

console.log(string.includes('J'))
console.log(array.includes('J'))

let data = {
  language: 'Javascript',
  languages: ['Python', 'C#']
}

console.log(data.language.includes('J'))
console.log(data.languages.includes('Python'))
console.log(data.languages[1].includes('#'))
