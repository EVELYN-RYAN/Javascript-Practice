
function Number2Roman(num) {
    const NUMERALS = ["I","V","X","L","C","D","M"] 
    const template = [[],[0],[0,0],[0,0,0],[0,1],[1],[1,0],[1,0,0],[1,0,0,0],[0,2]]
    const characters = String(num)
    let output = ""
    // n = position for NUMERALS array, c = what num character we are trying to classify
    for (let [n,c] = [0,characters.length-1]; c > -1; [n=n+2,c--]) {
        // Grab the template for that character[position] starting from the last moving up
        var charTemp = template[parseInt(characters[c])]
        // Prepend each value of the Char template
        xNumeral = ""
        for (let x = 0; x < charTemp.length;x++){
            // Find the numeral related to each template positions
            xNumeral = xNumeral.concat(NUMERALS[n+charTemp[x]])
        };
        output = xNumeral+output
    }
    return output
};
let output = Number2Roman(3999)
console.log(output)

// Note for Ryan tomorrow. 0 is still a valid number and needs an array infront of the template. change counters to accomidate this