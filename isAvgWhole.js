(function isAvgWhole(arr) {
    let soma = arr.reduce ((acc,atual)=> acc+= atual)
    let n = arr.length
    let retorno = soma%n?false:true
    console.log(retorno)
    return retorno
})([1, 2, 3, 4, 5])