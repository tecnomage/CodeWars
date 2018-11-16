var str =[2,3,4,5,6];


var str2 = "(6,12),(4,12),(3,12)";
let nova = str2.slice(1) // to remove first index character
console.log(str2)
//console.log(nova)
//var nova2 = nova.slice(5,6);
console.log("("+nova.slice(0,4)+")"+  nova.slice(6,12) + nova.slice(13,19))
//console.log(nova2)