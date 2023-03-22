

// Realizar uma ação até uma condição ser satisfeita

let letters = [...'abcdefghijklmnopqrstuvwxyz']
let box = []

do {
  let index = Math.floor(Math.random() * letters.length - 0)
  box.push(letters[index])
} while (box.length < 100)

console.log(box)
box = []

while (box.length < 100) {
  let index = Math.floor(Math.random() * letters.length - 0)
  box.push(letters[index])
}
console.log(box)
