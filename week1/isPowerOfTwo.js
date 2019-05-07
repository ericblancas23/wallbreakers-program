var isPowerOfTwo = function(n) {
    if (n < 0) return false;
    var hasOne = false;
    while (n > 0) {
        if (n & 1) {
            if (hasOne) {
                return false;
            }
            hasOne = true;
        }
        n >>= 1;
    }
    return hasOne;
};