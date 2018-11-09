// (function listSquared(m, n) {
//     var arr = [];
//     for (var i = m; i <= n; i++){
//       var temp = 0;
//       for (var j = 1; j <= i; j++) {
//         if ( i % j == 0) temp += j*j;  
//       };
//       if ( Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
//     };
//     console.log(arr)
//     return arr;
//   })(1,250)
(function listSquared (m, n) {
    var matches = [];
  
    for (var i = m; i <= n; ++i) {
      var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
      var ok = Number.isInteger(Math.sqrt(sum));
  
      if (ok) {
        matches.push([i, sum]);
      }
    }
    console.log(matches)
    return matches;
  })(1,250)
  
  function getDivisors (n) {
    var divisors = [];
  
    for (var i = 1; i <= n / 2; ++i) {
      if (n % i) {
        continue;
      }
  
      divisors.push(i);
    }
  
    return divisors.concat([n]);
  }