
(function AlphabetSoup(str) {
    var strsplidata = str.split("");
    var final;
    var reversa = strsplidata.map(n => {
            return n.charCodeAt(0);
    })
    reversa.sort((a,b)=>a-b);
    //console.log(reversa)
    final= reversa.map(n=> String.fromCharCode(n))
    //console.log(strsplidata)
    //console.log(final.join(""))
    return final.join("");
    
   
})("edabit")


//https://edabit.com/challenge/bHDbMWpdeNaw23jqT