(function maskify(str) {
    let size = str.length - 4
    let teste = [...str].map((n, i) => {
        if (i < size) return '#'
        return n;
    })
    return teste.join('');
})("lalallalalalalallala")

//https://edabit.com/challenge/5o7CE6N4uNAGDzjRg