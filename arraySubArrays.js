
/**https://edabit.com/challenge/zeBNPCpiXYNpKG6pt
 * x argument: Number of subarrays contained within the main array.
*  y argument Number of items contained within each subarray(s).
*  z argument: Item contained within each subarray(s).
 * */
(function matrix(x, y, z) {
    let arrays = [0][0]=0//new Array(y).fill(z)
    let num = x;
    //     new Array(y).fill(z),
    //     new Array(y).fill(z),
    //     new Array(y).fill(z)
    // ]

    for (let i = 0; i < x; i++) {
        for (let j = 0; j <= y; j++) {
            //arrays.push([y].fill(z))
            arrays[i][j]=2
            //arrays.push(2)
        }

    }

    console.log(arrays)
    return arrays
})(4, 5, 3)


function matrix(x, y, z) {
    return Array(x).fill(Array(y).fill(z));
  }

  function matrix(x, y, z) {
    return Array(x).fill().map( m => Array(y).fill(z));
}

function matrix(x, y, z) {
    iArr = []
    oArr = []
    for (let i = 0; i<y; i++){
      iArr.push(z)
    }
    for (let i = 0; i<x; i++){
      oArr.push(iArr)
    }
    return oArr
  }