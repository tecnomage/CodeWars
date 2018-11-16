var teste=[2,3,1]

// if(teste){
//     console.log('entrou')
// }

console.log(teste.reduce(soma));



function soma(a,b,c){
    
    return a+b+c 
}


var numeradores = [3,4,5,6,7] 
const deno = 6
const reescrita = d => e => e * d

const num = numeradores.map(reescrita(deno))
console.log(num)