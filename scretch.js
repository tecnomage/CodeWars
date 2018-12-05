// JavaScript
(function stretchTruth(num, str, arr) {
    let countN = 0, countS = 0;
    
    arr.map(n => {
        if (n === num) countN++
        else
            if (n === str ) countS++;

    })
    return countN + countS + 1;

})((1, '1', []))



//Sometimes We Stretch the Truth


//Test.assertEquals(stretchTruth(1, 'Sometimes We Stretch the Truth', ['1','Sometimes We Stretch the Truth']), 2)
//Test.assertEquals(stretchTruth(1, '1', [2,3]), 1)

//verifica o tipo de n
//compara com o tipo correto
//num ou str? soma ao count de cada