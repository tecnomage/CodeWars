(function getAbsSum(arr) {

    var saida = arr.length === 1 ? Math.abs(arr[0]) : arr.reduce((acc, n) => acc = Math.abs(acc) + Math.abs(n))
    console.log(saida)
    return saida
})([-1, -3])