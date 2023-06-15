

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

// Chaves = valores (len)
function registro_pessoa(colecao, chaves, valores) {
  const ultimo_i = len(colecao)
  const objeto = {}
  for (let i = 0; i < len(chaves); i++) {
    objeto[chaves[i]] = valores[i]
  }
  colecao[ultimo_i] = objeto
  return colecao
} 

function n_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const registro = [
  // {'nome': 'Lucas', 'nascimento': 1992, 'atleta': true},
  // {'nome': 'Lanna', 'nascimento': 1995, 'atleta': false},
]

const chaves = ['nome', 'nascimento', 'atleta']

const pessoas = [
  'Alice', 'Bruno', 'Carolina', 'Daniel', 'Eduardo', 'Fernanda', 'Gabriela',
  'Hugo', 'Isabela', 'João', 'Karine', 'Lucas', 'Mariana', 'Natália',
  'Otávio', 'Patricia', 'Quintino', 'Roberta', 'Sergio', 'Thais', 'Ulisses',
  'Valentina', 'Wagner', 'Xavier', 'Yasmin', 'Zoe'
]

const nascimentos = []
let nascimentos_i = 0
for (let i = 0; i < len(pessoas); i++) {
  nascimentos[nascimentos_i] = n_aleatorio(1970, 2012)
  nascimentos_i++
}

const atletas = []
let atletas_i = 0
for (let i = 0; i < len(pessoas); i++) {
  atletas[atletas_i] = n_aleatorio(0, 2) === 0 ? true : false
  atletas_i++
}

console.log(registro)
for (let i = 0; i < len(pessoas); i++) {
  registro_pessoa(registro, chaves, [pessoas[i], nascimentos[i], atletas[i]])
}
console.log(registro)
