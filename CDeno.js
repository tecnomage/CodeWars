(function convertFrac(lst) {
  var denominadores, deno, numeradores;
  //let LCD = lcd.bind(this);
  denominadores = lst.map(x => x[1])
  var deno = denominadores.reduce((acc, atual) => acc *= atual)
  
  var teste = denominadores.reduce(lcm)
  console.log(teste)

  
})([[1, 2], [1, 3], [1, 4]])


function gcd(a, b){ a ? gcd(b % a, a) : b;}

function lcm(a, b) {a * b / gcd(a, b);}

