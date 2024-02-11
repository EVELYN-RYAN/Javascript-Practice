
function Number2Roman(num) {

    const numerals = {"M":1000,"D":500,"C":100,"L":50,"X":10,"V":5,"I":1}
    let build = ""
    var num
    for (const [index, [key, value]] of Object.entries(Object.entries(numerals))) {
        var vez = Math.floor(num/value)
        num = num%value
        var set = ""
        for (let i = 0; i < vez; i++) {
            set = set.concat(key);
        }
        if (set.length == 4){
            set = key + Object.keys(numerals)[index-1]
        }
        build = build.concat(set)
    }
    return (build)
};
let output = Number2Roman(2499) //MMCDLXLVIV is invalid MMCDXCIX is correct
console.log(output)