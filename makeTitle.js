(function makeTitle(str) {
    let newStr = str.split(' ');
    let upper = newStr.map(n => {
        let nova=[...n].map((n, i) => {
            if (i === 0)
                return n.toUpperCase()
            return n
        })
        return nova.join('')
    })
    console.log(upper.join(' '))
    return upper.join(' ')
})("I am a title")

//https://edabit.com/challenge/LvtsCQNpx7CwHGubf