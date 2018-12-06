(function alternatingCaps(str) {
    
    let splitada = [...str]
    let nova;
    
    for (var i = 0; i < splitada.length; i += 2) {
        splitada[i] = splitada[i].toUpperCase();
      }

      nova = splitada.join("")
     //console.log(splitada.join(""))
     console.log(nova)
     return nova;
})('OMG!!! This website is awesome!!')

//OmG!!! tHiS WeBsItE Is aWeSoMe!!', instead got: 'OMG!!! THiS WeBsItE Is aWeSoMe!!'
//Expected: 'OmG!!! tHiS WeBsItE Is aWeSoMe!!', instead got: 'OMG!!! THiS WeBsItE Is aWeSoMe!!'

function alternatingCaps(str) {
    return str.split('').map((c, i) => {
      return (i % 2 === 0) ? c.toUpperCase() : c.toLowerCase() ;
    }).join('');
  }

  //https://edabit.com/challenge/fzuGQP9Cmzi3ujj4r