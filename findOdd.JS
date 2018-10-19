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
const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1)
//.length % 2 === 1).reduce(a => a);
var resultado= findOdd(A);
console.log(resultado);