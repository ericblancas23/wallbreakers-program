var flipAndInvertImage = function(A) {
    let cp = A.slice();
    
    cp = cp.map((v,i) => {
        let temp = v.reverse();
        temp = temp.map((w)=> {
            if(w === 0) {
                return 1;
            } else {
                return 0;
            }
        })
        return temp;
    })
    return cp;
};