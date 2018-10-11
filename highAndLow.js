//https://www.codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript

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