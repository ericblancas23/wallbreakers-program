var isHappy = function(n) {
    if(n === 1 || n === 7) return true;
    if(n<10) return false;
    n = n.toString();
    let nextNum = 0, tmp;
    for(let i = 0; i < n.length; i++) {
        tmp = Math.floor(n[i]);
        nextNum += tmp * tmp;
    }
    return isHappy(nextNum);
};