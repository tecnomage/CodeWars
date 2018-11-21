(function checkEnding(str1, str2) {
    //usar Regex 
    let str = new RegExp('(' + str2 + ')$');
    if (str.exec(str1)) {
        console.log("ok")
        return true;
    }else{
        console.log("falsa")
        return false
    }

})("samurai", "zis")
//https://edabit.com/challenge/H9ohpGMyqJ9bAkqE5
//("samurai", "zi")
//("cooperative", "ooper"), false);