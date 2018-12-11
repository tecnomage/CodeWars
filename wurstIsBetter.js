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