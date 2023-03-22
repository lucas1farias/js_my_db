

let students = [
  {name: 'Lucas', grade: 8.4},
  {name: 'Diana', grade: 9.2},
]

// ----- IMPERATIVO -----
// Tudo está sendo feito ao mesmo tempo
// Importância no "como" deve ser feito
// Não é reutilizável
let sumGrades = 0
for (let i = 0; i < students.length; i++) {
  sumGrades += students[i].grade
}
console.log('[MPERATIVO]', sumGrades / students.length)

// ----- DECLARATIVO -----
// Coisas são feitas em parte
// Importância no "o que" deve ser feito
// É reutilizável

// Função facilitadora p/ o uso do método "map" (objName = cada índice de "students", por causa do "map")
let getGrade = objName => objName.grade
// Função facilitadora p/ o uso do método "reduce" (2 pars = cada índice de "students", por causa do "reduce")
let getSum = (startIndex, nextIndex) => startIndex + nextIndex
// Função direta que calcula média
let meanCalculus = (total, source) => total / source.length

let gradesSum = students.map(getGrade).reduce(getSum)
// console.log(gradesSum)
let gradesMean = meanCalculus(total=gradesSum, source=students)
console.log('[DECLARATIVO]', gradesMean)
