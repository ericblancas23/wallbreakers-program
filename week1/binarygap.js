var binaryGap = function(n) {
    var maxZeros = 0; 
    while(n !== 0 && n % 2 === 0) {
        n >>>= 1;
    }
    for(var curr=0; n !== 0; n>>>=1) { 
        if(n % 2 === 0) { 
            curr++; 
        } else { 
            curr = 0; 
        } 
        maxZeros = Math.max(maxZeros, curr); 
    } 
    return maxZeros;
};