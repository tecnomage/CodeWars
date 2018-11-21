function findLargestNum(arr) {
    var big = -Infinity;
    arr.map(n => {
        n >= big ? big = n : big;
    })
    return big
}