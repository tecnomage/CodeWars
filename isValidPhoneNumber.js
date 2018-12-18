const regex = function isValidPhoneNumber(str) {
    let expre = new RegExp('[(]?\d{3}[)]?\s?\d{3}\s?-?\s?\d{4}','g')
    //let expre = new RegExp('[(]?\d{3}[)]?\s?-?\s?\d{3}\s?-?\s?\d{4}','g')
    console.log(expre.test(str))
    return expre.test(str)
}


regex("(123) 456-7890")

//https://edabit.com/challenge/nHaKL55KwW3XaGrAw