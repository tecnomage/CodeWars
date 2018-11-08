//Math.pow(7, 3)
//Math.sqrt(n)
// we want to find all integers between
// m and n whose sum of
// squared divisors is itself a square. 

(function listSquared(m, n) {
    var lista = [];
    var soma = 0;
    var saida = [] ;
    for (let i = m; i <= n; i++) {
        if (n % i === 0) {
            let raiz;
            let quadrado = Math.pow(i, 2)
            lista.push(quadrado);
            soma += quadrado;

            raiz = Math.sqrt(soma);
            if(raiz!==NaN && Number.isInteger(raiz) )
            saida.push(Math.sqrt(soma));
        }

    }
    console.log(soma)
    console.log(saida)
    //TODO parsear a lista para verificar os roots

})(42, 250)
