(function convertFrac(lst) {
  var denominadores, deno, numeradores;
  //let LCD = lcd.bind(this);
  denominadores = lst.map(x => x[1])
  var deno = denominadores.reduce((acc, atual) => acc *= atual)
  //TODO alterar para pegar todos denominadores
  var teste = lcm(deno,[2,3,4])
  console.log(deno)
  console.log(teste)
})([[1, 2], [1, 3], [1, 4]])

//TODO alterar para aceitar mais que 2 parametros
function lcm(soma,...n) {
    
  if (typeof n !== 'object')
    return false;
  return (!soma) ? 0 :
    Math.abs((soma) / gcd(n));
}

//TODO alterar para aceitar mais que 2 parametros
function gcd(...args) {
  x = Math.abs(x);
  y = Math.abs(y);
  var div = args.reduce((acc,n)=>{
    while
  })
 
  return x;
}

  //  while (y) {
  //     var t = y;
  //     y = x % y;
  //     x = t;
   
  // }