

function reverter_letra(char, tipo) {
  return tipo == 0 ? obter_letra(obter_codigo(char) - 32) : obter_letra(obter_codigo(char) + 32)
}

function eh_maior(a, b) {
  return a > b
}

// Não é algo certo, depende de qual função será usada no contexto
function repetir_funcao(alvo, funcao) {
  for (let i = 0; i < alvo.length; i++) {
    if (i <= alvo.length) {
      console.log(funcao(alvo[i], alvo[i + 1]))
    }
  }
}

const vogais = [7, 2, 5, 3]
const letras_maiusculas = repetir_funcao(vogais, eh_maior)
// letras_maiusculas = true false true false