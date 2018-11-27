(function minMaxLengthAverage(arr) {
    var min, max, avg, size, total;
    size = arr.length;
    min = Math.min(...arr);
    max = Math.max(...arr);
    total = arr.reduce((acc, atual) => acc += atual);
    console.log(total)
    
    avg = total / size;

    //return [min, max, size, avg]

    console.log([min, max, size, avg])


})([6, 9, 15, -2, 92, 11])