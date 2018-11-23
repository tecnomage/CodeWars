(function doubleChar(str) {
    let split = str.split("");
    let doubled = split.map(n => n+n)
    console.log(doubled.join(""))
    return doubled.join("");
})("String")