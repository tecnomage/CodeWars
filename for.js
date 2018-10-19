var nova = {teste:1, asdadasd: 2, aqweqeqw:3, asdadad:10 };
var novidade=[];
var chaves=[]

for(var value in nova){
    //console.log(value);
    novidade.push(nova[value]);
    chaves.push(value)
}

//console.log(Object.keys(nova));
console.log(chaves)
console.log(novidade)