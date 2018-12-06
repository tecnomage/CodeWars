(function validatePIN(pin) {
    //let Regex = new Regex(')
   let saida = /d{4}|\d{6}/.test(pin);
   console.log(saida) 
   return false;
})("123433344444")