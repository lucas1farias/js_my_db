

// Se há atributos mandatórios, então não é recomendado que eles recebam valores de dentro da classe, mas sim de fora
// Observe que "this.other" & "this.something" são atributos não mandatórios
// Funções são chamadas fora do construtor funcionam exatamente como funções fora das classes, com exceção da palavra "function"
// Funções de classe com parâmetros, necessitam de {par1, par2...} 
// Funções podem ser chamadas dentro de outras via sintaxe "this.nomeDaFunção"
// Atributos podem receber funções de classe (normalmente para atributos não mandatórios da classe)
// A classe, exigindo parâmetros obrigatórios, na instanciação do objeto, se usa {atrib1_nome: atrib1_valor, atrib2_nome: atrib2_valor}
  
class Player {
  constructor({x, y}) {
    
    // Atribs. mandatórios (dentro de {})
    this.x = x
    this.y = y

    // Atribs. não mandatórios (eles recebem valores dentro de funções ou a própria função) 
    this.other = undefined
    this.something = this.funcaoMae()
  }

  funcaoSemPar() {
    return ''
  }

  funcaoComPar({par}) {
    this.other = par
  }

  funcaoInterna() {
    return ''
  }

  funcaoMae() {
    return this.funcaoInterna()
  }
}

let anObject = new Player({x: 100, y: 700})
console.log(anObject.funcaoSemPar())
console.log(anObject.funcaoComPar({par: ''}))
