(function findSmallestNum(arr){
    var menor=Infinity;
    arr.map(n => {
        n <= menor ? menor = n : menor = menor;
    })
    console.log(menor)
})([10,2,4,10,8,1])