

function exibir_indices(colecao) {
    for (let i in colecao) {
        console.log(i)
    }
}

function exibir_dados(colecao) {
    for (let i of colecao) {
        console.log(i)
    }
}

const js = 'Javascript'
exibir_indices(js)
exibir_dados(js)
