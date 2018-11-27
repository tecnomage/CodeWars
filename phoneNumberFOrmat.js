(function formatPhoneNumber(numbers) {
    var final;
    var prefix = numbers.splice(0, 3);
    var inicial = numbers.splice(0, 3);
    prefix = '(' + prefix.join('') + ')'+' '
    console.log(prefix)
    console.log(inicial);
    console.log(numbers);
    final = [prefix,inicial.join('')].join('')
    console.log([final,numbers.join('')].join('-'))
    return [final,numbers.join('')].join('-')

})([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])
//(519) 555-4468

// function formatPhoneNumber(numbers) {
//     return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
//  }










//https://edabit.com/challenge/Z6oY6EWwT9rde8YXm