const saida =function factorial(x) {
    var n=1;
   while(x){
       n*=x
       x--;
   }
   return n
}


saida(3)