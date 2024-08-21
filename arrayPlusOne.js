var plusOne = function(digits) {
    for (let i = digits.length-1; i >= 0; i--) {
        if (i === 0 && digits[i] == 9){
            digits[0] = 1;
            digits.push(0)
            break

        }else if (digits[i] == 9) {
            digits.pop()
            plusOne(digits)
            digits.push(0)
            break
        }   
        else{
            digits[i] = digits[i]+1
            break
        }
    }
    return digits
};
console.log(plusOne([9]))