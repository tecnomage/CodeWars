https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript

// function findOdd(arr) {
//   var count = 0;
// for(var i = 0; i < A.length; i++) {
//  // var count = 0;
//  for(var j = 0; j < A.length; j++) {
//        if(A[i] == A[j]) {
//          count++;
//        }
//      }
//  if (count % 2 !== 0) {
//      return A[i];
//  }
// }
// count = 0;
// }

var A = [3,3,3,3,4,6,6,8,2,28,8,8,8,9,9]
// exemplo = 3,3,3,3,
const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1)
//.length % 2 === 1).reduce(a => a);
var resultado= findOdd(A);

function filtra(arr){
    return arr.filter(n=> n === 3)
}

var N = [3,4,3,3,3,4,4,6,6]
var N = [3,4,2,6]
var filtrado;
// ------------->FILTER SEMPRE RETORNA UM ARRAY---------------------
filtrado = N.filter(n => n + filtra(N)[0] > 6)
//console.log(resultado);
console.log(filtrado);
//console.log(array2.filter(n=> n.length % 2 === 1 ));

