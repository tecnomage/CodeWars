(function formatNum(num) {
    let splited = [...num.toString()]
    splited.reverse();
    let dot = splited.map((n, i) => {
        if(i!==0 && i%3===0){
            return n + ","
        }
        return n
    })
    dot.reverse()
    console.log(dot.join(''))
    return dot.join('')
})(2200)

// 0 1 2 3
// 0 0 0 2
// 2 0 0 0 