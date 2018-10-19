// The net effect of the reduce((a, b) => a ^ b) code is to XOR(^) all the numbers in the array together.
// So, for an array [n1, n2, n3, ...] the result is

// n1 ^ n2 ^ n3 ^ ...
// If you XOR a number with itself, you get 0. Since only one number occurs an odd number of times (suppose n3 is that number), that means that the expression above simplifies to

// 0 ^ n3
// And if you XOR any number with 0, you get that same number!

// 0 ^ n3 === n3
//:::::::::::::::::::::::::::::::::::::::::::
// impar + impar resulta em impar
// par + par resulta em par
//:::::::::::::::::::::::::::::::::
//For anyone looking for a simple explanation: 
//the Bitwise XOR operator ("^") cancels out every number once it occurs twice, and because there is only one number in the array that occurs an odd number of times, it works here perfectly.
var bit= 3 ^ 3^ 3^2;
var bit2 = [3,3,4,3,4,1,1]

console.log(bit)
console.log(bit2.reduce((x,s)=> x^s))

///:::::::::::::::::::
// ::::::::::usando reduce e 2 filters
//////