(function factorial(int) {
    let count=int;
    let valor=1;
    while(count>0){
        valor*=count
        count--;
    }
    
    console.log(valor)
    return  valor
})(6)