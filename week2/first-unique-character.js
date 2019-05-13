var firstUniqChar = function(s) {
    var result = -1;
    var hash = {};
    
    for (var i=0; i<s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]].value++;
        }
        else {
            hash[s[i]] = { index: i, value: 1 };
        }
    }
    
    for (var i=0; i<Object.keys(hash).length; i++) {
        var key = Object.keys(hash)[i];
        if (hash[key].value === 1) {
            result = hash[key].index;
            break;
        }
    }
    
    return result;
};