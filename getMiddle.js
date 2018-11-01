(function getMiddle(s) {
    //If the word's length is odd, return the middle character. 
    //If the word's length is even, return the middle 2 characters.
    var retorno;
    var tamanho = s.length;
    var meio = Math.floor(tamanho/2)
    tamanho % 2 === 0 ? retorno = s[meio - 1] + s[meio] : retorno = s[meio];
    console.log(retorno)
    return retorno

})("testing")