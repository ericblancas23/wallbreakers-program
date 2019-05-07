var numJewelsInStones = function(J, S) {
    var i;
    var count = 0;
    for(i = 0; i < S.length; i++) {
        if(J.indexOf(S[i]) !== -1) {
            count++
        }
    }
    return count;
};