(function reverse(str) {
    let novo = str.split(' ')
    //console.log(novo.length);
    novo = novo.map(w => {
        if (w.length >= 5)
            return [...w].reverse().join('')
        return w
    })

    //console.log(novo.join(' '));
    return novo.join(' ')
    

})("teste dss string")

//https://edabit.com/challenge/wPNzJEJebN2mewcqY