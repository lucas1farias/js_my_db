

// Função útil para pegar strings numéricas e reverter em arrays de números
function eh_string_numerica(alvo) {
  return alvo >= '0' && alvo <= '9'
}

function iterar_sobre(alvo, funcao) {
  for (let i = 0; i <= alvo.length; i++) {
    if (funcao(alvo[i])) {
      console.log(alvo[i])
    }
  }
}

const characters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '_', '$', '%', '&', '*', '+', '-', '/', '<', '=', '>', '?', '@', '^', '|', '~', '0'
]

iterar_sobre(characters, eh_string_numerica)
