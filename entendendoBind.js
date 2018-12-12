const verify = function verifySubstrs(mainStr, head, body, tail) {
    let teste2= {
        n : 2,
        x : 4

    }
    
    let teste = mainStr;
    console.log(head)
    let meio = verificaMeio.bind(teste2);
    meio();
    
    if (mainStr.startsWith(head) && mainStr.endsWith(tail) && meio()) {
          return 'My head, body, and tail.'
    } else
        return "Incomplete."

}

function verificaMeio(){
       //var ok =  this.;
       //console.log(this.arguments[0])
       console.log(this.arguments)
       console.log(this.n)
       var str = this.head;
        // let splited = [...mainStr]
        // let fim = mainStr.indexOf(tail);
        // let startMiddle = mainStr.indexOf(body);
        // splited = splited.slice(startMiddle, startMiddle + body.length);
        // if(splited.join("") === this.body && splited.join("") != undefined)    
            return true;


        
}


//https://edabit.com/challenge/DrxLn9tdXg4xWpMAY



verify("Hey, you, stop that.", "Hey", ", y ou, st ", ".")