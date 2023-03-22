

/*
  É comum em classes, existir uma ou mais vars "this" que têm como valor, uma função
  Se na função há outras vars "this", certificar que essas vars tenham sido instanciadas ANTES da "var this"
  Caso não seja feito, o Javascript não consegue reconhecer a(s) var(s) usada(s) na função, e gera erro
  No exemplo abaixo, temos um erro: "this.weekDays" está instanciada "APÓS" "this.dayOfWeek"
  Qual o erro? "this.dayOfWeek" usa "this.weekDays", sendo que ela só é instanciada depois de "this.dayOfWeek"
  Só se pode usar uma "var this" numa função se ela já existir anteriormente a quem a usa
  Solução? inserir "this.weekDays" e colocar antes de "this.dayOfWeek"
*/

class Clock {
  constructor() {
    
    this.dayOfWeekValue = new Date().getDay()
    this.dayOfWeek = this.getDayOfWeek()
    this.weekDays = [
      "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ]
    this.hour = this.hourValue()
    this.minute = this.minuteValue()
    this.second = this.secondValue()
    this.millisecond = this.millisecondValue()
    this.fullTime = this.stringTime()
  }
  
  getDayOfWeek() { 
    let days = this.weekDays.length - 1
    for (let i = 0; i <= days; i++) {
      if (this.dayOfWeekValue === i) {
        return this.weekDays[i]
      }
    }
  }
}
