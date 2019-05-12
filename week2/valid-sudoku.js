var isValidSudoku = function(board) {
    let valid = true;

const validate = digits => {
    digits = digits.filter(v => v !== '.').map(n => Number(n)).sort((a, b) => a - b);
    
    for(let k = 0; k < digits.length -1; k++) {
        if(digits[k] === digits[k+1]) {
            valid = false;
        }
    }
}

// validate rows
for(let r = 0; r < board.length; r++) {
    let digits = board[r]
    
    validate(digits);
}

// validate cols
for(let c = 0; c < board[0].length; c++) {
    let digits = [];
    
    for(let k = 0; k < board.length; k++) {
        digits.push(board[k][c]);
    }
    
    validate(digits);
}

// validate 3x3
for(let r = 0; r < board.length; r+=3) {
    for(let c = 0; c < board[0].length; c+=3) {
        let digits = [];
        for(let k = 0; k < 3; k++) {
            for(let n = 0; n < 3; n++) {
                digits.push(board[r+k][c+n]);
            }
        }
        
        validate(digits);
    }
}

return valid;
};