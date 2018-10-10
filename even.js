// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :
//var numbers = [2, 4, 7, 8, 10];


var func = function iqTest(numbers){
    var total;
    //var num=numbers.split(' ').map(n => Number(n));
    //num = "2 4 6 8 10".split(' ').map(n => parseInt(n))
    
    var num = numbers.split(' ').map(n => {
                                        total += n;
                                         return Number(n)%2});
    
    // 2 array é par
    // 1 array é impar
    var somaNumeros = num.reduce((acc,atual) => acc+=atual)>1?2:1; 
    console.log("soma numeros eh " + somaNumeros)
    //filtrar se é 0 ou se é 1
   // pega a posicao +1 e imprime 
   // se for 
   // 1 1 1 1 0
   console.log(num)
    var posicao = somaNumeros>1? num.indexOf(0)+1:num.indexOf(1)+1;
    console.log("posicao eh " + posicao)
    //console.log(posicao);
    
}

func("1 2 8 4 12 10")
func("2 4 7 8 10");
func ("3 5 7 9 2");


