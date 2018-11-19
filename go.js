(function Go(num) {
    var lines = "";
    var cat=""
    for (let index = num; index > 0; index--) {
        cat = new String(cat).concat("-")

    }
    console.log(cat)
    return cat;
})(5)

//https://edabit.com/challenge/3cBe8af7yG2rzLEA2