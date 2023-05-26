

/*
vertebrado ... homem
mamifero
onivoro

vertebrado ... aguia
ave
carnivoro

invertebrado ... minhoca
anelideo
onivoro
*/

var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

function main() {
  const atrib_a = entrada(lines, 'str')
  const atrib_b = entrada(lines, 'str')
  const atrib_c = entrada(lines, 'str')
  const animal_filtrado = descobrir_animal(atrib_a, atrib_b, atrib_c)
  exibir(animal_filtrado)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function entrada(fonte, tipo) {
  if (tipo === 'str') {
    return fonte.shift().trim()
  } else if (tipo === 'int') {
    return parseInt(fonte.shift())
  } else if (tipo === 'float') {
    return parseFloat(fonte.shift())
  } 
}

function descobrir_animal(cls_a, cls_b, cls_c) {
  const vertebrado_ave = ['aguia', 'pomba']
  const vertebrado_mamifero = ['homem', 'vaca']
  const invertebrado_inseto = ['pulga', 'lagarta']
  const invertebrado_anelideo = ['sanguessuga', 'minhoca']
  
  if (cls_a === 'vertebrado') {
    
    
    if (cls_b === 'ave') {
      if (cls_c === 'carnivoro') {
        return vertebrado_ave[0]
      } else {
        return vertebrado_ave[1]
      }
      
    } 
    
    else {
      if (cls_c === 'onivoro') {
        return vertebrado_mamifero[0]
      } else {
        return vertebrado_mamifero[1]
      }
    } 
  }
  
  else {
    
    if (cls_b === 'inseto') {
      if (cls_c === 'hematofago') {
        return invertebrado_inseto[0]
      } 
      else {
        return invertebrado_inseto[1]
      }
      
    } 
    
    else {
      if (cls_c === 'hematofago') {
        return invertebrado_anelideo[0]
      } else {
        return invertebrado_anelideo[1]
      }
    } 

  }
}

main()
