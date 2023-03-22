

class Clock {
  constructor() {
    this.weekDays = [
      "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ]
    this.dayOfWeekValue = new Date().getDay()
    this.dayOfWeek = this.getDayOfWeek()
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

  hourValue() {
    return new Date().getHours()
  }

  minuteValue() {
    return new Date().getMinutes()
  }

  secondValue() {
    return new Date().getSeconds()
  }

  millisecondValue() {
    return new Date().getMilliseconds()
  }

  stringTime() {
    return `[${this.hour}:${this.minute}:${this.second}]`
  }
}

let clock = new Clock()
console.log(clock.dayOfWeek)
console.log(clock.hour)
console.log(clock.minute)
console.log(clock.second)
console.log(clock.millisecond)
console.log(clock.fullTime)

/* Código antigo 
let today = new Date().getDay()

switch (today) {
  case 0:
    theDay = "Domingo"
    break;
  case 1:
    theDay = "Segunda-feira"
    break;
  case 2:
    theDay = "Terça-feira"
    break;
  case 3:
    theDay = "Quarta-feira"
    break;
  case 4:
    theDay = "Quinta-feira"
    break;
  case 5:
    theDay = "Sexta-feira"
    break;
  case  6:
    theDay = "Sábado"
    break
}
console.log(theDay)
*/
