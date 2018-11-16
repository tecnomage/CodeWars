(function convertFrac(lst) {
  var denominadores, numeradores;
  let deno = 0
  let saida;

  //TODO pode refatorar para varrer o array somente uma vez
  numeradores = lst.map(x => x[0]);
  denominadores = lst.map(x => x[1])

  deno = denominadores.reduce(lcm)
  var num = numeradores.map(reescrita(deno))
  saida = final(num, denominadores, deno)
  var saidaStr = String(saida)
  //console.log(saidaStr.slice(0,4)+")"+  saidaStr.slice(6,13) + saidaStr.slice(13,20))
  //console.log(saidaStr.substr(0,6)+ saidaStr.substr(7,6)+ saidaStr.substr(14,6))
  //return  saidaStr.substr(0,6)+ saidaStr.substr(7,6)+ saidaStr.substr(14,6)
  console.log(saidaStr)
  return saidaStr
  
  
  
})([[1, 2], [1, 3], [1, 4]])



function gcd(a, b) {
  if (a)
    return gcd(b % a, a)
  else
    return b
}

function lcm(a, b) {

  return a * b / gcd(a, b)
}

function reescrita(a) {
  return function (b) {
    return a * b
  }
}


function final(a, deno, mdc) {
  var saida = []
  //Var str = new String();
  var novaStr = "";
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    const d = deno[index];
    // novaStr.concat("("  + element / d, mdc + ")").toString()
    saida.push('(' + element / d, mdc + `)`)
    //console.log(novaStr)
  }

   //console.log(saida)
  return saida.join(",");
  //return novaStr;
}

5
10


  //https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript

// var lst = [ [1, 2], [1, 3], [1, 4] ]
// Test.assertEquals(convertFrac(lst), "(6,12)(4,12)(3,12)")

