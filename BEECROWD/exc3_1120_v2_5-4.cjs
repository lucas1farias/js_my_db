

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

let i = 0
const loop_vida_util = lines.length

function main() {
  while (i < loop_vida_util) {
    let entradas = lines.shift().split(' ')
    const codigo = entradas[0]
    const codigo_repr = entradas[1]

    if (parseInt(codigo) >= 1 && parseInt(codigo) <= 9 && BigInt(codigo_repr) >= 1 && BigInt(codigo_repr) <= 10 ** 100) {
      
      const verificacao = esta_contido(codigo, codigo_repr)
    
      if (verificacao) {
          
        const codigo_repr_array = alterar_indices(codigo_repr, ' ').split(' ')
        const codigo_repr_array_filtrado = remover_digito(codigo, codigo_repr_array)
        const codigo_anulado = verificar_nulabilidade(codigo_repr_array_filtrado)

        if (codigo_anulado) {
          if (codigo != '0' || codigo_repr != '0') {
            exibir(0)
          }
        } 

        else {
          if (codigo_repr[0] == '0') {
            exibir(parseInt(codigo_repr_array_filtrado.join('')))
          } else {
            exibir(codigo_repr_array_filtrado.join(''))
          }
          
        }
      } 

      else {
        if (codigo_repr[0] == '0') {
          exibir(parseInt(codigo_repr))
        } else {
          exibir(codigo_repr)
        }
      }

      if (codigo === '0' || codigo_repr === '0') {
        exibir('')
      }
        
    }
    
    i++
  }
  
}

function exibir(conteudo) {
  console.log(conteudo)
}

function esta_contido(ref, alvo) {
  return alvo.includes(ref)
}

function alterar_indices(alvo, simbolo) {
  let alvo_alterado = ''
  for (let i = 0; i < alvo.length; i++) {
    alvo_alterado += alvo[i] + simbolo
  }
  return alvo_alterado
}

function remover_digito(ref, alvo) {
  let similaridades = []
  let resultado = []
  
  for (let i = 0; i < alvo.length; i++) {
    alvo[i] === ref || alvo[i] === '' ? similaridades.push(true) : similaridades.push(false) 
  }
  
  for (let i = 0; i < similaridades.length; i++) {
    !similaridades[i] ? resultado.push(alvo[i]) : null 
  }

  return resultado
}

function verificar_nulabilidade(alvo) {
  let contador = 0
  for (let i = 0; i < alvo.length; i++) {
    if (alvo[i] === '0' || alvo[i] === '') {
      contador++
    }
  }
  return contador == alvo.length ? true : false
}

main()
