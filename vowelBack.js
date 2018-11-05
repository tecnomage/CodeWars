(function vowelBack(s) {

    var str = [];
    var tamanho = s.length
    
    //TODO
    // Verificar se está entre 97 e 122
    // Se não
    // Se menor q 97...
    // Se maior q 122 => diferenca= cod atual - 122 then 122 - diferenca

    //novoArray.toLowerCase();
    

    //TODO verificar se o resultado da soma esta dentro do alfabeto ou algo do tipo

    for (let i = 0; i < s.length; i++) {
        var cod, original;
        char = s.charAt(i).toLowerCase();

        original, cod = s.charCodeAt(i)
        if (cod === 99 || cod === 111)
            //TODO alterar isso aqui em todos
            cod = cod - 1
        if (cod === 100)
            cod -= 3
        //extrair esses ifs para metodos
        //verificaConsoante
        if (cod === 97 || cod === 101 || cod === 105 || cod === 111 || cod === 117) {
            cod += 9
            if (cod === 99 || 111) {
                cod -= 1
            } else if (cod === 100) {
                cod -= 3
            }
        }
        else {
            cod -= 5
            verificaExceptions(cod, original)
        }

        str.push(String.fromCharCode(cod))

        //     //limite alfabeto tabela  ascii
        //     // superior 122 (z)
        //     // inferior 97  (a)
    }

    function verificaExceptions(cod, original) {
        //TODO tem como verificar a letra em vez do ascii
        if (cod === 97)
            return 2


    }

    function foraDoAlfabeto(n) {
        var abaixo, acima
        abaixo = n < 97
        acima = n > 122
        if (abaixo) n = 122
        if (acima) n = 97

        return n;
    }

    // var char = s[0]
    // console.log(char.charCodeAt(0));
    // var char2 = char.charCodeAt(0) + 10
    // console.log(char2);
    console.log(str)
})("te")


//"\n".charCodeAt(0);
//a e i o u 

//function isASCII(str) {
//     return /^[\x00-\x7F]*$/.test(str);
// }
