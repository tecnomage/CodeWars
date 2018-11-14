var div = [2, 4, 3]

var arr = div.reduce(lCM)

console.log(arr);

function lCM(){
if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / GCD(x, y));
}

  function GCF(a, b) {
    if (b === 0) return a;
    else return GCF(b, a % b);
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }



function GCD(a, b) {
  if(b === 0) return a;
  else  return GCD(a, a % b );
   // return GCD(a, b)
}

//http://mathjs.org/docs/reference/functions/lcm.html