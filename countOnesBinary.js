(function countOnes(i) {
    //filtra pelos 1
    let bin = []

    while (i > 0) {

        let resto = i % 2;
        bin.push(resto)
        i = i / 2

    }

    bin.filter(n => n > 0);
    return bin.length
})(100)

//https://edabit.com/challenge/KcMmQE3bhxvfiYquQ