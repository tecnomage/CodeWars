(function convertFrac(lst) {
<<<<<<< HEAD
  var denominadores;
  let numeradores, deno, saida = [];
  //let LCD = lcd.bind(this);
  denominadores = lst.map(x => x[1])
  deno = denominadores.reduce((acc, atual) => acc *= atual)
  saida = lcd(deno)
  console.log(saida)
})([[1, 2], [1, 3], [1, 4]])

function lcd(arr) {
  var divisor = [];
  var deno;
  var n = 2
  while (arr > n) {
    if (arr % n == 0) {
      divisor.push(n)
    }
    else{
      n++;
      divisor.push(n)
    }
    arr = arr / n
  }
  return divisor;
=======
    var denominadores, deno, numeradores;
    //let LCD = lcd.bind(this);
    denominadores = lst.map(x => x[1])
    var deno = denominadores.reduce((acc, atual) => acc *= atual)
    console.log(deno)
    console.log(denominadores)
    var teste = gcd_rec(2,5)
    console.log(teste)
})([[1, 2], [1, 3], [1, 4]])

function lcd(arr) {
    var divisor = [];
    var n = 2;

    while (arr >= n) {
        if (arr % n === 0) {
            divisor.push(n)
            arr = arr / n;
        } else {
            n++
        }
    }
    


    //divisor.reduce((acc, n) => acc = acc + n);
    return divisor;
}


function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
>>>>>>> 0ae69e62452abb8b9ca63a3e8d0881f9279a1715
}


//https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript

// var lst = [ [1, 2], [1, 3], [1, 4] ]
// Test.assertEquals(convertFrac(lst), "(6,12)(4,12)(3,12)")
