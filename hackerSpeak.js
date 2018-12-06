function hackerSpeak(str) {
    var chars = {'a':'4','e':'3','i':'1', 'o':'0', 's':'5'};
    str = str.replace(/[aeios]/g, letter => chars[letter]);
    
    return str;
}

// function hackerSpeak(str) {
//     return str
//         .replace(/e/g, "3")
//         .replace(/i/g, "1")
//         .replace(/a/g, "4")
//         .replace(/o/g, "0")
//         .replace(/s/g, "5");
//    }