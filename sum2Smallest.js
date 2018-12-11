(function sumTwoSmallestNums(arr) {

    let valor = arr.sort((v, v2) => v - v2);
    valor = valor.filter(n => n >=0)
//     for (let i = 0; i < valor.length; i++) {
//         if (valor[i] <= 0)
//             valor.pop(i)
// }
    console.log(valor)
<<<<<<< HEAD
    console.log(valor[0] + valor[1])
   return valor[0] + valor[1]
    //8
})([ -1, 2, 6, 9 ])
=======
    return valor[0] + valor[1]

})([2, 5, 6, -2, -4, 7, 8, 9, 10])


>>>>>>> ad781d895d08e7aefcdf6f77201669bbe5d3215a
//https://edabit.com/challenge/GNgCfKHWfQwByBNqa