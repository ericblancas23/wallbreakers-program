var selfDividingNumbers = function(left, right) {
    var selfDiv = [], result;
    
    for(left; left < right +1; left++) {
        for(var i=0; i<left.toString().length; i++) {
            if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {
                result = true;
            }
            else {
                result = false;
                break;
            }
                
        }
        if(result == true)
            selfDiv.push(left);
    }
    
    return selfDiv;
};