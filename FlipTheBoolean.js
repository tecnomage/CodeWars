(function reverse(bool) {
    //console.log(!bool)
    var teste = typeof(bool)
    if (teste != "boolean") {
        console.log("boolean expected")
        return "boolean expected"
    }
    else {
        console.log(!bool)
        return !bool
    }

})(true)