//https://www.codewars.com/kata/find-the-unique-number-1/train/javascript
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.

const unicos = (x,index,self) =>
{  
  return self.indexOf(x) === index;
}

const freq = function(arr) {
  var a = [], b = [], prev;

  arr.sort();
  for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] !== prev ) {
          a.push(arr[i]);
          b.push(1);
      } else {
          b[b.length-1]++;
      }
      prev = arr[i];
  }

  //
  return b;
}

var unico = (arr => {
  var cont=arr.filter(unicos);
  var nova = []
  nova = freq(arr).filter(n => n===1);
  console.log(nova)
})([2, 2,0.55,1,2,2,2])

console.log(unico)
