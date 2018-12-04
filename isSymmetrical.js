(function isSymmetrical(num) {

    let splited = num.toString().split('');
    let size = splited.length;
    let inicio, final;

    if (num === 1) {
        return true
    }
    // else if (splited.length % 2) {
    //     console.log(false)
    //     return false
    // }

    inicio = splited.slice(0, size / 2)
    final = splited.slice(size / 2, size)
    final.reverse();

   for (let index = 0; index < inicio.length; index++) {
       if(inicio[index]!== final[index] )
            return false
   } 
   return true;   


})(95559)