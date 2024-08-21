var lengthOfLastWord = function(s) {
    let word = ""
    let onWord = true
    i = s.length-1
    while (word.length == 0 || onWord == true){
        if (s[i] ===" " || i<0) {
            onWord = false
        }
    
        else{ 
            word = word + s[i]
            onWord = true
        }
        i--
    }
    return word.length
};
console.log(lengthOfLastWord("a"))
var pee= "a"