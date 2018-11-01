(function nextNumber(seq){
//a+ (n-1)d + 1/2(n-1)(n-2)c
//a 1o termo
//n termo procurado
//d diferenca dos 2 1os numeros
//c diferenca da diferenca

var a,n,d,c;
var nth,pt2;

a=seq[0];
n=seq.length+1
d=seq[1] - seq[0] 
c= (seq[3] - seq[2]) - (seq[2] - seq[1])

//a+ (n-1)d + 1/2(n-1)(n-2)c
nth = (a + (n-1) * d) + (0.5 * (n-1) * (n-2)*c)

pt2 = 0.5 * (n-1) * (n-2)*c

  //var ultimo = seq[length-1] / seq[length-2]
return nth;  
  
})([15,28,45,66,91,120])
