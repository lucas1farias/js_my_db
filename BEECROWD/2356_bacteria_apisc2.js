

/*
Todas elas possuiam uma parte do código genético igual (composto pelas proteínas A, C, G, T)
constatou que aquele {{ trecho }} de código genético é o que: 
    {{ define se uma bactéria é resistente ou não }} => {{ A, C, G, T }}

D e S, cada qual em uma linha
D = DNA da bactéria
S = sequência de código genético que leva a resistência

Procurar se 'ACGT' estão em "S"

===== stdin =====
ACGTC
CGT
CCCT
AG

ACGTC = Resistente
CCCT = Nao resistente

function igualar_listas(a, b) {
  let nova_lista = []
  let diferenca = a.length - b.length
  
  nova_lista = b

  for (let i = 0; i < diferenca; i++) {
      nova_lista.push(0)
  }
  
  return nova_lista
}

function monitorar_resistencia_bacteria(alvo, msg, msg_erro) {
  const identificadores = [65, 67, 71, 84]
  let [a, c, g, t] = [0, 0, 0, 0]

  for (let i = 0; i < alvo.length; i++) {
    if (alvo[i] == identificadores[0] && a == 0) {
      a++
    } else if (alvo[i] == identificadores[1] && c == 0) {
      c++
    } else if (alvo[i] == identificadores[2] && g == 0) {
      g++
    } else if (alvo[i] == identificadores[3] && t == 0) {
      t++
    }
  }

  let sequencias_achadas = a + c + g + t
  return sequencias_achadas >= 4 ? msg : msg_erro
}
*/

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function main() {
  while (lines.length != 0) {
    const dna = lines.shift()
    const sequencia = lines.shift() 
    
    const dna_lista = codigo_letras(dna)
    const sequencia_lista = codigo_letras(sequencia)

    const sequencia_tamanho_original = sequencia_lista.length
    const resultado = esta_contido(dna_lista, sequencia_lista, 'Resistente', 'Nao resistente')
      
    exibir(resultado)
  }
}

function exibir(conteudo) {
  console.log(conteudo)
}

function codigo_letra(char) {
  return char.charCodeAt(0)
}

function codigo_letras(iteravel) {
  let lista_de_codigos = []
  
  for (let i = 0; i < iteravel.length; i++) {
    lista_de_codigos.push(codigo_letra(iteravel[i]))
  }
  
  return lista_de_codigos
}

function diferentes(alvo, dados=true) {
  let contador = 0
  let diferentes = []

  for (let externo = 0; externo < alvo.length; externo++) {
    let diferente = true

    // Onde se acha os números !=
    for (let interno = 0; interno < externo; interno++) {
      if (alvo[interno] === alvo[externo]) {
        // console.log(alvo[interno], '===', alvo[externo])
        diferente = false
        break
      }
    }

    if (diferente) {
      contador++
      diferentes.push(alvo[externo])
    }
  }
  
  return dados ? diferentes : contador
}

function esta_contido(maior, menor, msg=true, msg_erro=false) {
  let sequencia = []
  let similaridades = 0
  let c_menor = 0

  for (let i = 0; i <= maior.length; i++) {
    if (i >= maior.length) {
      i = 0
      c_menor++
    }
    if (menor[c_menor] == maior[i]) {
      similaridades++
      sequencia.push(maior[i])
    }
    if (c_menor == menor.length) {
      break
    }
  }

  const encontrados = `${diferentes(sequencia)}`
  const sequencia_genetica = `${menor}`

  return encontrados === sequencia_genetica ? msg : msg_erro
}

main()
