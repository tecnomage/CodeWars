(function vowelBack(s) {

    var str = [];
    //str= s.split("");
    var tamanho = s.length

    console.log(s)
    for (let i = 0; i < s.length; i++) {
        this.cod;
        this.original;
        let verificaSemoved = verificaMoved.bind(this);
        let verificaAlfabeto = verificaSeAlfabeto.bind(this)
        let char;

        char = s[i].toLowerCase();
        original = char.charCodeAt(0);
        cod = char.charCodeAt(0);

        var testeExceptions = verificaExceptions.bind(this)
        var verifica = testeExceptions();
        if (verifica) {
            verificaSemoved();
            str.push(String.fromCharCode(cod))
            continue;
        }

        if (cod === 97 || cod === 105 || cod === 111 || cod === 117) {
            cod -= 5
            verificaAlfabeto();
            verificaSemoved();
        }
        else {
            cod += 9
            verificaAlfabeto();
            verificaSemoved();
        }

      str.push(String.fromCharCode(cod))

    }
    //console.log(str.join(''))
    return str.join('');
})("exampletesthere")
//("codewars")
//("testcase")

function verificaSeAlfabeto() {
    let dif;
    if (this.cod > 122) {
        dif = this.cod - 122;
        return this.cod = 96 + dif;
    } else if (this.cod < 97) {
        dif = 96 - this.cod
        return this.cod = 122 - dif;
    }

}


//cod, original
function verificaExceptions() {
   
    if (this.cod === 101) {
        this.cod -= 4;
        return true;
    } else if (this.cod === 99 || this.cod === 111) {
        this.cod -= 1;
        return true;
    }
    else if (this.cod === 100) {
        this.cod -= 3;
        return true;
    }


    // if (cod === 99 || cod === 111 || cod === 100 || cod === 101)
    //     cod = original;
    return false;
}

function verificaMoved() {
    //c ,o , d , e
    if (this.cod === 99 || this.cod === 111
        || this.cod === 100 || this.cod === 101) {
        this.cod = this.original
    }
}

