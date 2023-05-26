

function eh_letra(char) {
  const codigo = char.charCodeAt(0)
  return codigo >= 65 && codigo <= 90 || codigo >= 97 && codigo <= 122 ? true : false
}

const caracteres = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '_', '$', '%', '&', '*', '+', '-', '/', '<', '=', '>', '?', '@', '^', '|', '~', '0'
]

for (let i = 0; i <= caracteres.length - 1; i++) {
  console.log(caracteres[i], eh_letra(caracteres[i]))
}
