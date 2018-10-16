//Compara as entradas retorna o valor do que tem deduzido do necessário
function CompareRecipeAvaliabe(a, b) {
    return a - b;
}

(function cakes(recipe, available) {
    var possui, receita, numeroDeBolos = 0, Qtdereceita;

    var QtdeIngredientesDisponiveis = Object.keys(available).length;
    var QtdeIngredientesReceita = Object.keys(recipe).length;

    var Qtdereceita = Object.values(recipe);
    var QtdeDisponivel = Object.values(available);
    var sobrou = [];
    //QtdeDisponivel.reduce((x, acc) => acc += x);


    if (QtdeIngredientesDisponiveis - QtdeIngredientesReceita < 0) return 0;

    
      possui = QtdeDisponivel.map((x, index, arr) => {
            // if (index === (arr.length - 1))
            if ((Qtdereceita[index]) == undefined) return 0
            return x / (Qtdereceita[index])
        })

        possui.filter(x => x>0)
        possui.sort();
        // item1 ingredientes/ item1 receita qntos bolos podem ser feitos
        //REDUZIR O VALOR DE CADA VALUE DO OBJ
    console.log(QtdeDisponivel);
    return numeroDeBolos;
})({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 })