//https://www.codewars.com/kata/find-the-unique-number-1/train/javascript
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.

// const unicos = (x,index,self) =>
// {  
//   return self.indexOf(x) === index;
// }


//DEVE retornar o indice se x===1
const indiceUnico= (x,index,self) =>{
   return x==1 
}

const freq = function(arr) {
  var a = [], b = [], prev, unico;

  arr.sort();
  //for(var j =0; j<b.length; j++){
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
       
    }
  //}
  //
  return [a,b];
}

var unico = (arr => {
 // var cont=arr.filter(unicos);
  var nova = [], single=[], numUnico=[];
  var retorno
  nova = freq(arr)
  numUnico = nova[0].map(x=> x);
  single = nova[1].map(x=> x).findIndex(x=> x==1);
  //retorno = single.filter(indiceUnico)
  //console.log(nova)
  //console.log(single)
 // console.log(retorno)
  return numUnico[single]
})([2, 2,2,2,2,3,200,3,3,3,5,5,5,5,5])

console.log(unico)
