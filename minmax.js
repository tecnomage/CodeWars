//retorna min e max na ordem
(function minMax(arr) {
    let minMax=[];
    //Array.prototype.appl
    minMax.push(Math.max(...arr),Math.min(...arr))
    
    return minMax;
    
})([10,8,5,6,4,3])