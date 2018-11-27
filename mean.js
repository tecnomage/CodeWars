function mean(arr) {
 NAO ESTA FUNCIONANDO
 
    let result = arr.reduce((acc,x)=> acc+=x)/arr.length;
    //return Number.parseFloat(result).toFixed(5);
    return Math.round(result)
}