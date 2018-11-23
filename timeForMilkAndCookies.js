(function timeForMilkAndCookies(date) {
    
    if ((natal.getDate() === date.getDate()) && (natal.getMonth() === date.getMonth())) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
})(new Date(2013, 11, 24))
//(new Date(3000, 11, 24))
//https://edabit.com/challenge/hPWnaSckJke5FXNEH

//(new Date('11/14/2013 00:00'