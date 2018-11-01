(function vowelBack(s) {

    var str=[];
    var tamanho = s.length

    //novoArray.toLowerCase();
    //consoantes +9
    
    //TODO verificar se o resultado da soma esta dentro do alfabeto ou algo do tipo

    for (let i=0; i <= s.length - 1; i++) {
        var cod,char;
        char=s.charAt(i).toLowerCase();
        //i>0 cod esta retornando NaN
        cod = char.charCodeAt(i)
        if (char.charCodeAt(i) === 99 || char.charCodeAt(i) === 111)
            cod - 1
        if (char.charCodeAt(i) === 100)
            cod  - 3

        if (char.charCodeAt(i) === 97 || 101 || 105 || 111 || 117) {
            cod + 9
            if (cod === 99 || 111) {
                cod - 1
            } else if (cod === 100) {
                cod - 3
            }
        }
        else {
            cod = char.charCodeAt(i) - 5
        }
        
        str.push(String.fromCharCode(cod))

        //     //limite alfabeto tabela  ascii
        //     // superior 122 (z)
        //     // inferior 97  (a)
    }


    function foraDoAlfabeto(n){
        var fora= n < 97 || n > 122? true : false;
        return fora;
    }

    // var char = s[0]
    // console.log(char.charCodeAt(0));
    // var char2 = char.charCodeAt(0) + 10
    // console.log(char2);
    console.log(str)
})("aa")


//"\n".charCodeAt(0);
//a e i o u 
//



// https://www.codewars.com/kata/vowels-back/train/javascript
// You need to play around with the provided string (s).
// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.
// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'.


// Exceptions:
// 1-> If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
// 2-> If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.
// 3-> Provided string will always be lower case, won't be empty and will have no special characters.