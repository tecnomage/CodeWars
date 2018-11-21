(function reverse(str) {
    var inversa = [];
    for (let i = str.length; i >= 0; i--) {
        inversa.push(str.charAt(i))
    }
    console.log(inversa.join(""));
    return(inversa.join(""))
})("meu")