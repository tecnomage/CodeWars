function mean(arr) {

 
    let result = arr.reduce((acc,x)=> acc+=x)/arr.length;
    //return Number.parseFloat(result).toFixed(5);
    return Number(result.toFixed(2));
}