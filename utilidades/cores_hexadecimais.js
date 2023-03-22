

function char() {
  let chars = 'abcdef'
  let numbers = '0123456789'
  let hexadecimal = []
  
  for (let index of chars) {
    hexadecimal.push(index)
  }
  
  for (let index of numbers) {
    hexadecimal.push(index)
  }

  return hexadecimal[Math.floor(Math.random() * (hexadecimal.length - 0))]
}

function rgbHexa() {
  return `#${char()}${char()}${char()}${char()}${char()}${char()}`
}

for(let i = 0; i < 10; i++) {
  console.log(rgbHexa())
}
