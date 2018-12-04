(function capMe(arr) {
    let nova = arr.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    return nova;
    
})(['mavis', 'senaida', 'letty'])