(function equal(a, b, c) {
    let set = new Set([a, b, c]);
    let count = arguments.length - set.size;

    console.log(set.size);
    console.log(count);
    if (count == 0) {
        return 0
    }
    else if (count == 1) {
        return 2

    }else if (count == 2){
        return 3
    }

})(1, 1, 3)
     //https://edabit.com/challenge/PKiTjA7SLK99ZZ8GK