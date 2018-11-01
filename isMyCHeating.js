//https://www.codewars.com/kata/is-my-friend-cheating/train/javascript
(function removeNb(n) {
    // var teste = [4, 5, 20]
    var nums = [];
    var duplas = [];
    let innerpair = [];
    var totaln, ab;

    for (let i = 1; i <= n; i++) {
        //nums[i]=i;
        nums.push(i);
    }

    totaln = nums.reduce((acc, n) => acc += n);

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length - 1; j++) {
            ab = nums[i] * nums[j]
            if (ab === totaln - (nums[i] + nums[j])) {
                var valores = [nums[i], nums[j]]
                innerpair.push(valores);

            }
        }

    }


    //fazer o if do retorno se nao encontrar nada
    return innerpair;
})(26);


///
// function removeNb (n) {
//     const sum = (n*(n+1))/2;
//     const result = [];
//     for(let b = n; b>0; b--){
//       const a =(sum-b)/(b+1)
       
//        if(a<n && Number.isInteger(a)){
//             result.push([a,b])
//           }
//     }  
//       return result
//     }