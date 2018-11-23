//TODO https://edabit.com/challenge/kbFhwaDyrd79JrgeB
(function charCount(myChar, str) {
    var splited = str.split("")
    var count=0;
     splited.map(atual => {
        if (myChar === atual) {
             count++;
        } 
    })
    console.count(count)
    console.count(typeof(count))
     return count;

})('c', "macc")