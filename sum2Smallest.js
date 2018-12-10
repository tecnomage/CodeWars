(function sumTwoSmallestNums(arr) {
    
    let valor = arr.sort((v,v2) => v-v2 );
    console.log(valor)
   return valor[0] + valor[1]
    
})([2,5,6,7,8,9,10])