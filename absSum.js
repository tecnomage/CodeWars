(function getAbsSum(arr) {
//n =-3 acc = 2 qndo deveria ser 4
    var saida = arr.length === 1 ? Math.abs(arr[0]) : arr.reduce((acc, n) => acc += Math.abs(n))
    var saida2 = arr.reduce((acc, n) => acc += Math.abs(n))
    //return arr.reduce((acc, n) => acc += Math.abs(n))
    //console.log(Math.abs(arr[0]))
    console.log(saida2)
    return saida
})([-1, -3, -5, -4, -10, 0])