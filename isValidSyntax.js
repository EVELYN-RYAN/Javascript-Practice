
var isValid = function(s) {
    if (s.length%2 == 1){
        return false
    }
    let aTypes = [{type:"()"},{type:"{}"},{type:"[]"}]
    let aChar = []
    for (c in s){
        for (t in aTypes){
            if (aTypes[t].type.includes(s[c])){
                if (aTypes[t].type[0] == s[c]){
                    aChar.push({value: s[c], type:aTypes[t].type, position:0})
                }
                else {
                    aChar.push({value: s[c], type:aTypes[t].type, position:1})
                }
                break
            }
        }
    }    
    let i = (aChar.length)-1
    while (i > 0 && aChar.length > 0){
        if (aChar[i].type == aChar[i-1].type && aChar[i].value != aChar[i-1].value && aChar[i].position - aChar[i-1].position == 1){
            aChar.splice(i-1,2)
            i = aChar.length-1
        }
        else {
        i--
        } 
    };
    if (aChar.length > 1) {return false}
    else {return true}
};
const s = "()[]}{"
console.log(isValid(s))