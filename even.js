// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :
//var numbers = [2, 4, 7, 8, 10];


var func = function iqTest(numbers){
    var num=[];
    
    for (let i = 0; i < numbers.length; i++) {
        //num.push(numbers.charAt(i))
        //"2 4 7 8 10"
        num.push(parseFloat(numbers.charAt(i)));
         
    }
    
    console.log(num)
    //console.log(typeof numbers);
     
    //LOGICA DE EXECUCAO
    //var cada = numbers.map(x. => x% 2);
    //var paridade = numbers.reduce((acc,atual) => acc+=atual) % 2
    //var num = cada.filter(x => x!=paridade);
    
    //console.log(cada.indexOf(num)+1);
    
    //console.log(paridade);
    //console.log(num)
    
    
}

console.log(func("2 4 7 8 10"));

// function iqTest(numbers){
//     var cada = numbers.map(x => x% 2);
//     var paridade = numbers.reduce((acc,atual) => acc+=atual) % 2
//     var num = cada.filter(x => x!=paridade);
    
//    return cada.indexOf(num)+1;
    
// }
