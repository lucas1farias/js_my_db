

// Outro bom exemplo está no módulo "bibliotecas/Date.js"

function dayOfTheWeek() {
  let today = new Date().getDay()
  let integers = [...Array(7).keys()]
  let days = [
    "Domingo", "Segunda-feira" , "Terça-feira",
    "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ]

  integers.forEach(index => {
    if (today == index) {
      theDay = days[index]
    }
  })
  return theDay

  // switch (today) {
  //   case 0:
  //     theDay = "Domingo"
  //     break;
  //   case 1:
  //     theDay = "Segunda-feira"
  //     break;
  //   case 2:
  //     theDay = "Terça-feira"
  //     break;
  //   case 3:
  //     theDay = "Quarta-feira"
  //     break;
  //   case 4:
  //     theDay = "Quinta-feira"
  //     break;
  //   case 5:
  //     theDay = "Sexta-feira"
  //     break;
  //   case  6:
  //     theDay = "Sábado"
  //     break
  // }
  // return theDay
}

console.log(dayOfTheWeek())
