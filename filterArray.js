(function filterArray(arr) {
    return arr.filter(x => typeof (x) === 'number')

})([1, 2, "a", "b"])