function wurstIsBetter(str) {
    const sausages = ['Kielbasa', 'Chorizo', 'Moronga', 'Salami', 'Sausage', 'Andouille', 'Naem', 'Merguez', 'Gurka', 'Snorkers', 'Pepperoni']
    const re = new RegExp(sausages.join('|'), 'gi');
    return str.replace(re, 'Wurst');

}
//https://edabit.com/challenge/j7s4LTKexAEazQApv


// Kielbasa
// Chorizo
// Moronga
// Salami
// Sausage
// Andouille
// Naem
// Merguez
// Gurka
// Snorkers
// Pepperoni

// function wurstIsBetter(str) {
//     return str.replace(/kielbasa|chorizo|moronga|salami|sausage|andouille|naem|merguez|gurka|snorkers|pepperoni/gi, 'Wurst');
//   }