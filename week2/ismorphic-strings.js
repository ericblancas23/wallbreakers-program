var isIsomorphic = function(s, t) {
    const hashMapS = {};
    const hashMapT = {};
    for (var i = 0, l = s.length; i < l; i++) {
        var sc = s.charAt(i);
        var tc = t.charAt(i);
        if (hashMapS[sc] === undefined && hashMapT[tc] === undefined) {
            hashMapS[sc] = tc;
            hashMapT[tc] = sc;
        } else if (hashMapS[sc] !== tc) {
            return false;
        }
    }
    return true;
};