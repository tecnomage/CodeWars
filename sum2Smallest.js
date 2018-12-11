(function sumTwoSmallestNums(arr) {
    
    let valor = arr.sort((v,v2) => v-v2 );
    console.log(valor)
    console.log(valor[0] + valor[1])
   return valor[0] + valor[1]
    //8
})([ -1, 2, 6, 9 ])
//https://edabit.com/challenge/GNgCfKHWfQwByBNqa