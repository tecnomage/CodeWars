//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

(function cakes(recipe, available) {
    var possui, receita; 

    var QtdeIngredientesDisponiveis = Object.keys(available).length;
    var QtdeIngredientesReceita = Object.keys(recipe).length;

    var Qtdereceita = Object.values(recipe);
    var QtdeDisponivel = Object.values(available);
    
    //QtdeDisponivel.reduce((x, acc) => acc += x);


    if (QtdeIngredientesDisponiveis - QtdeIngredientesReceita < 0) return 0;

    
      possui = QtdeDisponivel.map((x, index, arr) => {
            // if (index === (arr.length - 1))
            if ((Qtdereceita[index]) == undefined) return 0
            return x / (Qtdereceita[index])
        })

       possui = possui.filter(x => x != 0)
        possui.sort();
        // item1 ingredientes/ item1 receita qntos bolos podem ser feitos
        //REDUZIR O VALOR DE CADA VALUE DO OBJ
   
    //NAO ESTÁ FUNCIONANDO POIS OS INGREDIENTES DA RECEITA E DISP PODEM VIR EM ORDEM DIVERSAS
    return parseInt(Number(possui[0]))
})({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 })