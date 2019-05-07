var longestCommonPrefix = function(strs) {
    if (!strs)
        return '';

    let smallest = strs.reduce( (min, str) => min < str ? min : str, strs[0] );
    let largest  = strs.reduce( (min, str) => min > str ? min : str, strs[0] );

    for (let i=0; i<smallest.length; i++) {
        if (smallest[i] != largest[i])
            return smallest.substr(0,i);
    }

    return '';
};