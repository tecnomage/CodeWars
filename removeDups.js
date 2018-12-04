(function removeDups(arr) {
    let count = []
    let novo = arr.map(w => {
        // if (count[w]) {
        //     count[w]++;
        // } else {
        //     count[w] = 1
        // }
        if(!count.includes(w)){
            count.push(w)
        }
    });
    //console.log(count['John'])
    console.log(count)
})(['John', 'Taylor', 'John'])