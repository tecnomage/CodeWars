(function isFourLetters(arr) {
    var Four_letras = arr.filter(n => {
        return n.length >= 4;
    })
    console.log(Four_letras)
    return Four_letras;
})(["Ryan", "Ki", "Jason", "Matt"])