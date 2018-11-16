(function calculateExponent(num, exp) {
    var counter = exp;
    var total=1;
    while (counter) {
        total *= num ;
        counter--;
    }
    console.log(total);
})(5,5)
//https://edabit.com/challenge/H25aG5aAdmFcMpBsg