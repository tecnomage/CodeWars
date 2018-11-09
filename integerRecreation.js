//Math.pow(7, 3)
//Math.sqrt(n)

// we want to find all integers between
// m and n whose sum of  squared divisors is itself a square. 

(function listSquared(m, n) {
    let listaquadrado = [];
    let lista = [];
    let soma = 0;
    let saida = [];
    for (let i = m; i <= n + 1; i++) {

        //TODO VERIFICAR SE ESTA INSERINDO TODOS NUMEROS CORRETOS
        soma = getDivisors(i).reduce((soma,n)=> soma + n * n)
        let raiz, ok;
        let quadrado = Math.pow(i, 2)

        lista.push(quadrado);

        //FIXME nao está calculando a raiz corretamente
        ok = Number.isInteger(Math.sqrt(soma));

        if (ok) {
            saida.push([i, soma]);
        }

    }
    console.log(saida)
})(1, 250)


function getDivisors(n) {
    var divisors = [];

    for (var i = 1; i <= n / 2; ++i) {
        if (n % i) {
            continue;
        }

        divisors.push(i);
    }

    return divisors.concat([n])
}
//list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
//list_squared(42, 250) --> [[42, 2500], [246, 84100]]


// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript


// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. 
// These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
// The sum of the squared divisors is 2500 which is 50 * 50, a square!
// Given two integers m, n (1 <= m <= n)
// --> we want to find all integers between m and n whose sum of
//  squared divisors is itself a square. 
// 42 is such a number. The result will be an array of arrays or of tuples 
// (in C an array of Pair) or a string, each subarray having two elements,
//  first the number whose squared divisors is a square and then
//   the sum of the squared divisors.
//                                       divisores , soma
//  //list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// //list_squared(42, 250) --> [[42, 2500], [246, 84100]]

// 1o achar os divisores entre os numeros
// fazer o quadrado


