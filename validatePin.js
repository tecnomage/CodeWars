(function validatePIN(pin) {
    //let Regex = new Regex(')
   //let saida = /(\d{4})|(\d{6})/.test(pin);
   //let saida = /^\d{4}$|^\d{6}$/.test(pin);
   //console.log(saida) 
   return /^\d{4}$|^\d{6}$/.test(pin);
})("1234345")