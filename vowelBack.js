(function vowelBack(s) {

    var str = [];
    //str= s.split("");
    var tamanho = s.length
    
    //TODO
    // Verificar se está entre 97 e 122
    // Se não
    // Se menor q 97...
    // Se maior q 122 => diferenca= cod atual - 122 then 122 - diferenca


    for (let i = 0; i < s.length; i++) {
        var cod, original, char;
        char = s[i].toLowerCase();

        original = char.charCodeAt(0);
        cod = char.charCodeAt(0);

       //TODO descobrir onde devem ir as exceptions
        if (cod === 97 || cod === 101 || cod === 105 || cod === 111 || cod === 117) {
            cod += 9
        }
        else {
            cod -= 5
        }

        cod = verificaExceptions(cod, original)
        //cod = verificaExceptions(cod,original)
        str.push(String.fromCharCode(cod))

    

    }

    console.log(str)
})("te")





function foraDoAlfabeto(n) {
    var fora = n < 97 || n > 122 ? true : false;
    return fora;
}

//TODO
//verificar exceptions antes das regras gerais
function verificaExceptions(cod, original) {
    //TODO colocar isso fora, é outra exception   
    // if (cod === 99 || cod === 111) {
    //     cod -= 1;
    // }
    if (cod === 99 || cod === 111 || cod === 100 || cod === 101)
        cod = original;

    return cod;

}

