(function timeForMilkAndCookies(date) {
    //let natal = new Date(11, 24)
    let natal = new Date("December 24")
    //console.log(natal.getDate())
    //console.log(natal.getMonth())
    if ((natal.getDay() === date.getDay()) && (natal.getMonth() === date.getMonth())) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
})(new Date(2013, 11, 24))
//(new Date(3000, 11, 24))
https://edabit.com/challenge/hPWnaSckJke5FXNEH

//(new Date('11/14/2013 00:00'