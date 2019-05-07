var plusOne = function(digits) {
    let one = 1
    let resultItem = 0;
    for(var i = digits.length - 1; i >= 0; i--) {
        resultItem = digits[i] + one;
        one = parseInt(resultItem / 10);
        if (resultItem == 10) {
            digits[i] = 0;
        } else {
            digits[i] = resultItem;
        }
    }
    if(one>0) {
        digits.unshift(one);
    }
    return digits
};