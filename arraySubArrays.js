
/**https://edabit.com/challenge/zeBNPCpiXYNpKG6pt
 * x argument: Number of subarrays contained within the main array.
*  y argument Number of items contained within each subarray(s).
*  z argument: Item contained within each subarray(s).
 * */
(function matrix(x, y, z) {
    let arrays = [
        new Array(y),
        new Array(y),
        new Array(y)
    ]
    
    for (let i = 0; i < arrays.length; i++) {
        let n = 0;
        while (n < arrays[i].length) {
            arrays[i].push(z)
            n++;
        }
    }
    console.log(arrays)
    console.log(arrays[0].length)
    //console.log(arrays[0][0])
})(4, 5, 3)