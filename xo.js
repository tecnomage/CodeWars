function XO(str) {
    let splitada = str.toLowerCase().split("")
    let countx = 0, county = 0;
    let resultado;
    splitada.map(l => {
        if (l === 'x') {
            countx++
        } else if (l === 'o') {
            county++;
        }
    })
    resultado = countx === county ? true : false;
    return resultado;
}