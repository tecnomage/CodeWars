(function sortDecending(num) {
    let novo= num.toString().replace(/\D/g, '0').split('').map(Number);
    novo.sort( (a,b)=> b - a )
    console.log(novo.join(''))
    console.log(typeof(novo))
     return Number(novo.join(''))
})(888555444333111)

//844555848333111