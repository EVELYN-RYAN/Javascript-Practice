function Number2Roman(num) {
    const N = ["I","V","X","L","C","D","M"] 
    const T = [[],[0],[0,0],[0,0,0],[0,1],[1],[1,0],[1,0,0],[1,0,0,0],[0,2]]
    const C = String(num)
    const L = C.length-1
    let o = ""
    for (let [n,c] = [0,L]; c > -1; [n=n+2,c--]) {
        var z = T[parseInt(C[c])]
        var l = z.length
        y = ""
        for (let x = 0; x < l;x++){
            y = y.concat(N[n+z[x]])
        };
        o = y+o
    }
    return o
};
let o = Number2Roman(3999)
console.log(o)