const verify = function verifySubstrs(mainStr, head, body, tail) {
    let meio = verificaMeio.bind(verify);
    if (mainStr.startsWith(head) && mainStr.endsWith(tail) && meio()) {
        return 'My head, body, and tail.'
    } else
        return "Incomplete."

}

function verificaMeio() {
    let mainStr, head, body, tail;
    let splited, fim, startMiddle;
    mainStr = this.arguments[0];
    head = this.arguments[1];
    body = this.arguments[2];
    tail = this.arguments[3];
    splited = [...mainStr]
    fim = mainStr.indexOf(tail);
    startMiddle = mainStr.indexOf(body);
    splited = splited.slice(startMiddle, startMiddle + body.length);
    if (splited.join("") === body && splited.join("") != undefined)
        return true;
    else return false;

}


//https://edabit.com/challenge/DrxLn9tdXg4xWpMAY

// 0': 'Hey, you, stop that.',
//HEAD   '1': 'Hey',
// BODY   '2': ', y ou, st ',
//TAIL   '3': '.' }

// verify("Hey, you, stop that.", "Hey", ", y ou, st ", ".")



// if (mainStr.startsWith(head) && mainStr.endsWith(tail)) {
//     let splited = [...mainStr]
//     let fim = mainStr.indexOf(tail);
//     let startMiddle = mainStr.indexOf(body);
//     splited = splited.slice(startMiddle, startMiddle + body.length);
//     if (splited.join("") === body)
//      return 'My head, body, and tail.'
    
// } else
//     return "Incomplete."
// }