(function sumTwoSmallestNums(arr) {

    let valor = arr.sort((v, v2) => v - v2);
    valor = valor.filter(n => n >=0)
//     for (let i = 0; i < valor.length; i++) {
//         if (valor[i] <= 0)
//             valor.pop(i)
// }
    console.log(valor)
    return valor[0] + valor[1]

})([2, 5, 6, -2, -4, 7, 8, 9, 10])


//https://edabit.com/challenge/GNgCfKHWfQwByBNqa