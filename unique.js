//https://www.codewars.com/kata/find-the-unique-number-1/train/javascript
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.


Array.prototype.unique = function () {
  return this.filter((value, index, self) => {
    //console.log(value +" "+ index +" "+  self)
    //console.log(self.indexOf(value))
    return self.indexOf(value) === index;
  });
}



contador = arr => {
  var contador=[];
  var unico;
  arr.map((value,index,self) => {
    contador[value] ? contador[value]++: contador[value]=1;
    
   })
  console.log(contador)
  return 
}


var unico = (arr => {
  var cont=contador(arr);
  console.log(cont)
  //return arr.unique();
})([2, 2, 2, 4, 2])

console.log(unico)
