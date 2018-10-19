<<<<<<< HEAD
//https://www.codewars.com/kata/pete-the-baker/javascript

// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. Can you help him to find out, 
// how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) 
// and the available ingredients (also an object) and returns the maximum number
// of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts 
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

// must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
// ALGORITHMS

// Poweredby_qualified
// Solution:

// function cakes(recipe, available) {
//   // TODO: insert code
// }
// function cakes(recipe, available) {
//   // TODO: insert code
// }


(function cakes(recipe, available) {
    //compara a qnte de ingredientes da receita x do q tem
    var qtdeIngReceita,qtdeIngDisp;

    qtdeIngReceita = Object.keys(recipe);
    qtdeIngDisp = Object.keys(available);
    if(qtdeIngDisp.length - qtdeIngReceita.length < 0)  return 0;

  //PARA CHECAR CADA INGREDIENTE POSSIVELMENTE USAR RECURSAO


  })({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})
=======
function cakes(recipe, available) {
    // TODO: insert code
    var result = [];
    for (var prop in recipe) {
        var availableProp = available[prop] || 0;
        var recipeProp = recipe[prop] || 0;
        //console.log('availableProp:' + availableProp);
        //console.log('recipeProp:' + recipeProp);
        if (recipeProp > 0) {
            result.push(Math.floor(availableProp / recipeProp));
        }
    }
    return Math.min.apply(Math, result);
}
>>>>>>> e35a26fba0d22b5aa6f44e2618fca6687c8a4a02
