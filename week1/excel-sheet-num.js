var titleToNumber = function(s) {
    let res = 0;
    for (let i = 0, l = s.length; i < l; i++) {
        let num = s[i].charCodeAt() - 64;
        res += num * Math.pow(26, s.length - i - 1);
    }
    return res;
};