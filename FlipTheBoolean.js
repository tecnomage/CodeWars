(function reverse(bool) {
    var teste = typeof(bool)
    if (typeof (bool != "boolean")) {
        return "boolean expected"
    }
    
    else {
        console.log(!bool)
        return !bool
    }

})(true)