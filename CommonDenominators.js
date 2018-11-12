(function convertFrac(lst) {
    var denominadores, numeradores;
    //let LCD = lcd.bind(this);
    denominadores = lst.map(x => x[1])
    var deno = denominadores.reduce((acc, atual) => acc *= atual)
    console.log(deno)
})([[1, 2], [1, 3], [1, 4]])

function lcd(arr) {
    var divisor = [];
    var n = 2;
    while (deno > 0) {
        if (deno % n == 0) {
            divisor.push(n)
        }


    }

}


//https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript

// var lst = [ [1, 2], [1, 3], [1, 4] ]
// Test.assertEquals(convertFrac(lst), "(6,12)(4,12)(3,12)")
