(function countVowels(str) {
    let splitada;
    let count = 0;
    splitada = str.split("");
    splitada.map(n => {
        var val=n.charCodeAt(0)
        if (val === 97 ||val === 101 || val === 105 || val === 117 || val === 111 )
            count++;
    })
    console.log(count)
    return count
})("oo")