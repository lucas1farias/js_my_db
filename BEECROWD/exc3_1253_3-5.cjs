

/*
===== stdin =====
6
VQREQFGT
2
ABCDEFGHIJKLMNOPQRSTUVWXYZ
10
TOPCODER
0
ZWBGLZ
25
DBNPCBQ
1
LIPPSASVPH
4

===== stdin: explicação ===== 6 = qtd. de testes ... VQREQFGT = string ... 2 = qtd. de casas a deslocar por caractere
6                              
VQREQFGT                      TOPCODER          
2                             
ABCDEFGHIJKLMNO / PQRSTUVWXYZ    QRSTUVWXYZABCDE / FGHIJKLMNOP
10
TOPCODER                      TOPCODER
0
ZWBGLZ                        AXCHMA
25
DBNPCBQ                       CAMOBAP
1
LIPPSASVPH                    HELLOWORLD
4

===== FUNÇÕES =====
function obter_codigo_letra(char) {
  return char.charCodeAt(0)
}

function editar_char_codigo(char, n_saltos, positivo=true) {
  if (!positivo) {
    n_saltos = - n_saltos
  }
  let codigo_da_letra = obter_codigo_letra(char) + n_saltos
  return reverter_codigo_letra(codigo_da_letra)
}

function reverter_codigo_letra(codigo) {
  return String.fromCharCode(codigo)
}
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\r').join('').split('\n');

function main() {
  const qtd_testes = lines.shift()

  while (lines.length != 0) {
    const string = lines.shift()
    const deslocamento = parseInt(lines.shift())
    let string_codigo = ''
    let string_codigo_modificado = ''
    let string_nova = ''
    
    for (let i = 0; i < string.length; i++) {
      string_codigo += string[i].charCodeAt(0) + ' '
    }

    string_codigo = string_codigo.split(' ')
    string_codigo = string_codigo.filter(item => item !== '')
    
    for (let i = 0; i < string.length; i++) {
  
      if (string[i].charCodeAt(0) < 'Z'.charCodeAt(0) - deslocamento) {
        contador++
        let letra_maxima = String.fromCharCode('Z'.charCodeAt(0) - deslocamento)
        let indice_letra_maxima = string.split('').indexOf(letra_maxima)
        console.log(letra_maxima, indice_letra_maxima)
        
        string_codigo_modificado += ((string[i].charCodeAt(0) + deslocamento)).toString() + ' '
      } 
      else {
        string_codigo_modificado += ((string[i].charCodeAt(0) - deslocamento)).toString() + ' '
      }
      
    }

    string_codigo_modificado = string_codigo_modificado.split(' ')
    string_codigo_modificado = string_codigo_modificado.filter(item => item !== '')
    
    for (let i = 0; i < string_codigo_modificado.length; i++) {
      string_nova += String.fromCharCode(parseInt(string_codigo_modificado[i]))
    }
    console.log(string_nova)

    // Se "deslocamento = 2" então  Z - 2  = X
    // Se "deslocamento = 10" então Z - 10 = P
    // console.log(string_nova)
  }
}

main()
