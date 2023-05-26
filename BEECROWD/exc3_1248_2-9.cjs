

/*
cada caractere corresponde a algum alimento que você deveria comer
Você sabe o que tem comido no café da manha e no almoço
cada caractere corresponde a um tipo de alimento que você deveria ter comido aquele dia
Você decidiu que irá comer todo o restante de sua dieta durante o jantar
você quer imprimi-la como uma String (ordenada em ordem alfabética)
Se você trapaceou (comer muito de tipo de alimento, ou por comer algum alimento que não está no plano de dieta)
  imprimir a cadeia "CHEATER" sem as aspas

A entrada contém vários casos de teste
primeira linha de entrada contém um inteiro N que indica a quantidade de casos de teste
Cada caso de teste é composto por três linhas, cada uma delas com uma string com até 26 caracteres de 'A'-'Z' ou vazia
  alimentos da dieta
  do café da manhã
  do almoço

===== ENTRADA =====
ABCD = alimentos da dieta
AB   = alimento do café
C    = alimento do almoço

ABEDCS
''
''

===== SAÍDA =====
D      (faltou D ser consumido)

ABCDES (todos foram consumidos)

===== stdin =====
5
ABCD
AB
C
ABEDCS


EDSMB
MSD
A



IWANTSODER
SOW
RAT
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function esta_contido(ref, alvo) {
  return alvo.includes(ref)
}

function main() {
  const testes = lines.shift()
  let i = 0

  while (i < testes) {
    const alimentos = lines.shift()
    const cafe = lines.shift()
    const almoco = lines.shift()

    const fusao = cafe.split('').concat(almoco.split(''))
    let problema = 0
    const ausente = []
    const letras_ausentes = []
    
    for (let i = 0; i < fusao.length; i++) {
      if (!esta_contido(fusao[i], alimentos)) {
        problema++
      }
    }
    
    if (problema != 0) {
      console.log('CHEATER')
    } else {
    
      for (let i = 0; i < alimentos.split('').length; i++) {
        ausente.push(fusao.includes(alimentos[i]))
      }
    
      for (let i = 0; i < ausente.length; i++) {
        if (!ausente[i]) {
          letras_ausentes.push(alimentos[i])
        }
      }
      console.log(letras_ausentes.sort().join(''))
    }

    i++
    if (lines.length == 0) {
      break
    }
  }
}

main()
