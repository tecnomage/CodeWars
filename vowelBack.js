function vowelBack(s){


}


//"\n".charCodeAt(0);
//a e i o u 
//



// https://www.codewars.com/kata/vowels-back/train/javascript
// You need to play around with the provided string (s).
// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.
// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'.


// Exceptions:
// 1-> If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.
// 2-> If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.
// 3-> Provided string will always be lower case, won't be empty and will have no special characters.