

// Similar a indexação múltipla em python (ex: "array[0:2]")

let values = [...Array(26).keys()]
values.splice(0, 1)
console.log(values)
// Os índices desejados vão no array antes de "map"
let getThreeIndexes = [7, 10, 12].map(x => values[x])
console.log(getThreeIndexes)
