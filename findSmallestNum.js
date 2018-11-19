(function findSmallestNum(arr){
    var menor=Infinity;
    arr.map(n => {
        n <= menor ? menor = n : menor = menor;
    })
    console.log(menor)
    return menor
})([30,80,120,8])