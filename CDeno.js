(function convertFrac(lst) {
  var denominadores, deno, numeradores;
  //let LCD = lcd.bind(this);
  denominadores = lst.map(x => x[1])
  var deno = denominadores.reduce((acc, atual) => acc *= atual)
  //TODO alterar para pegar todos denominadores
  var teste = lcm_two_numbers(2,3,4)
  console.log(teste)
})([[1, 2], [1, 3], [1, 4]])

//TODO alterar para aceitar mais que 2 parametros
function lcm_two_numbers(...n) {
  //TODO retorna falso pq nao eh numero
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  return (!x || !y) ? 0 :
    Math.abs((n) / gcd_two_numbers(x, y));
}

//TODO alterar para aceitar mais que 2 parametros
function gcd_two_numbers(...args) {
  x = Math.abs(x);
  y = Math.abs(y);
  for (let i; i < args.length; i++) {
    while (y) {
      var t = y;
      y = x % y;
      x = t;
    }
  }
  return x;
}