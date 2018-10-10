// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

var hl = (nums => {
var maior=Number.NEGATIVE_INFINITY;
var menor= Number.POSITIVE_INFINITY;

var numeros = nums.split(" ").map(n => Number(n));

numeros.map(n => {
    //REFACTOR  
    //n>maior?maior=n:; 
    if(n>maior) maior=n;           
    if(n<menor) menor=n;
})

return maior +" " +menor

})

console.log(hl("1 2 3 4 5"));
console.log(hl("1 2 -3 4 5"));
console.log(hl("1 9 3 4 -5"));