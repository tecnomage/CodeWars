//https://www.codewars.com/kata/find-the-unique-number-1/train/javascript
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.

var unique = (arr => {
    var unico=[0];
    //Esse contador ira indicar qntas ocorrencias de cada numero houveram 
    // [0]=4 .....[4]=1
    var contaOcorrencia=[];
     var count= arr.filter(el => {
        return el != null;
      });
    
     var unico = count.map(n =>
        //TODO evitar o <empty item>
        
        // {
        //  if(n!=undefined || n!= null)   
        //  contaOcorrencia[n]=1;
        // }) 
         
    
    console.log(contaOcorrencia);
 return 0
})([1,2,3,4,5])