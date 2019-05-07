var detectCapitalUse = function(word) {
    if (word === '' || word.length === 1) return true;
    if (word[0] === word[0].toUpperCase() && word[1] === word[1].toUpperCase()) {
        for (let i = 1; i < word.length; i++) {
            if (word[i] !== word[i].toUpperCase()) {
                return false;
            }
        }
    } 
    else if (word[0] === word[0].toUpperCase()) {
        for (let j = 1; j < word.length; j++) {
            if (word[j] === word[j].toUpperCase()) {
                return false;
            }            
        }
    }
    else if (word[0] === word[0].toLowerCase()) {
        for (let k = 1; k < word.length; k++) {
            if (word[k] === word[k].toUpperCase()) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
};