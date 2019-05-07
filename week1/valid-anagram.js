var isAnagram = function(s, t) {
    const len = s.length;
    if (len !== t.length) return false;
    const hashTab = {};
    for (let i = 0; i < len; i++) {
        if (!hashTab[s[i]]) {
            hashTab[s[i]] = 1;
        } else {
            hashTab[s[i]]++;
        }
        if (!hashTab[t[i]]) {
            hashTab[t[i]] = -1;
        } else {
            hashTab[t[i]]--;
        }
    }
    for (let item in hashTab) {
        if (hashTab[item]) return false;
    }
    return true;
};
