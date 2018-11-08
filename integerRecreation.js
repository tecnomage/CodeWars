//Math.pow(7, 3)
(function listSquared(m, n) {
    var lista=[];
    var soma=0;
    for (let i = m; i <= n; i++){
        if(n%i===0){
            let quadrado = Math.pow(i,2)
            lista.push(quadrado);
            soma+=quadrado;
        }
        
    }
    console.log(soma)
    //TODO parsear a lista para verificar os roots

})(1,42)
