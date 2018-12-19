const regex = function isValidPhoneNumber(str) {
    let expre = new RegExp('^\(?\d{3})?\s\d{3}\s?-?\s?\d{4}','g')
    //let expre = new RegExp('[(]?\d{3}[)]?\s?-?\s?\d{3}\s?-?\s?\d{4}','g')
    console.log(expre.test(str))
    return expre.test(str)
}


regex("(123) 456-7890")

// function isValidPhoneNumber(str) {
// 	return /^\(\d{3}\) \d{3}-\d{4}$/.test(str);
// }

// const isValidPhoneNumber = str => /^\(\d{3}\) \d{3}-\d{4}$/.test(str)

//https://edabit.com/challenge/nHaKL55KwW3XaGrAw

