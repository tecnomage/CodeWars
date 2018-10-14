//https://www.codewars.com/kata/find-the-unique-number-1/train/javascript
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.
var count = [];
var count = Array.apply(null, Array(6));

Array.prototype.unique = function () {
  return this.filter((value, index, self) => {
    //console.log(value +" "+ index +" "+  self)
    //console.log(self.indexOf(value))
    return self.indexOf(value) === index;
  });
}



contador = arr => {
  arr.map((value,index,self) => {
    if (count[value] == undefined || count[value] == NaN) {
      console.log("entrou no if");
      count[value] = 1;
    }
    else count[index] + 1;
    console.log(value)
    console.log(count[index])
  })
  return count
}


var unico = (arr => {
  var cont=contador(arr);
  console.log(count)
  return arr.unique();
})
  //([0,0,0,0,0])
  ([2, 2, 2, 4, 2, 8])

console.log(unico)
